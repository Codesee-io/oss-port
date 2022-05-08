import type { FC } from "react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useCatch, Link } from "@remix-run/react";

import { getProject } from "~/projects.server";
import type { CodeSeeMapMetadata, GitHubData, Project } from "~/types";
import { getGitHubDataForProject } from "~/github.server";
import RootLayout from "~/components/RootLayout";
import ProjectAvatar from "~/components/ProjectAvatar";
import RepoLinks from "~/components/RepoLinks";
import RepoStats from "~/components/RepoStats";
import ProjectTabs from "~/components/ProjectTabs";
import Tag from "~/components/Tag";
import LearnSection from "~/components/markdown/LearnSection";
import AnchorHeader from "~/components/markdown/AnchorHeader";
import CurrentlySeeking from "~/components/markdown/CurrentlySeeking";
import ContributionOverview from "~/components/markdown/ContributionOverview";
import HelpWanted from "~/components/markdown/HelpWanted";
import markdownStyles from "~/styles/markdown.css";
import HacktoberfestIssues from "~/components/markdown/HacktoberfestIssues";
import FeaturedCodeSeeMap from "~/components/markdown/FeaturedCodeSeeMap";
import Maps from "~/components/Maps";
import { getCodeSeeMapMetadata } from "~/codesee.server";

export function links() {
  return [{ rel: "stylesheet", href: markdownStyles }];
}

export const loader: LoaderFunction = async ({ params }) => {
  const { projectOwner, project: projectName } = params;

  const slug = `${projectOwner}/${projectName}`.toLowerCase();
  const project = await getProject(slug);
  const githubData = getGitHubDataForProject(slug);

  let featuredMapMetadata: CodeSeeMapMetadata | undefined;
  if (project?.attributes.featuredMap?.url) {
    // Grab the map's metadata
    featuredMapMetadata = await getCodeSeeMapMetadata(
      project.attributes.featuredMap.url
    );
  }

  // If we couldn't find a matching project, throw a 404
  // https://remix.run/docs/en/v1/guides/not-found
  if (!project) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json({ githubData, project, featuredMapMetadata });
};

export const meta: MetaFunction = ({ data }) => {
  if (data?.project?.attributes?.name) {
    return { title: `OSS Port | ${data.project.attributes.name}` };
  }

  return {
    title: `OSS Port | 404`,
  };
};

type LoaderData = {
  project: Project;
  githubData: GitHubData;
  featuredMapMetadata: CodeSeeMapMetadata;
};

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <RootLayout>
        <main className="max-w-xl mx-auto p-4 py-16">
          <h2 className="font-accent text-2xl mb-2 text-black-500">
            There is no project here <span role="img">🙀</span>
          </h2>
          <p className="text-black-400 mb-4">
            Maybe the URL is incorrect or the project you're looking for was
            taken down. There are plenty more projects to check out, though!
          </p>
          <p>
            <Link to="/" className="text-blue-500 font-bold hover:underline">
              Go home
            </Link>
          </p>
        </main>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <main className="max-w-xl mx-auto p-4 py-16">
        <h2 className="font-accent text-2xl mb-2 text-black-500">
          {caught.status} {caught.statusText}
        </h2>
        <p className="text-black-400 mb-4">Something went terribly wrong</p>
        <p>
          <Link to="/" className="text-blue-500 font-bold hover:underline">
            Go home
          </Link>
        </p>
      </main>
    </RootLayout>
  );
}

const ProjectPage: FC = () => {
  const { project, githubData, featuredMapMetadata } =
    useLoaderData<LoaderData>();

  // Dynamically populate the tabs based on the existing sections
  const hasOverviewTab = project.body.overview.length > 0;
  const hasContributingTab = project.body.contributing.length > 0;
  const hasLearnTab =
    !!project.attributes.learnLinks && project.attributes.learnLinks.length > 0;

  const badges = [
    ...(project.attributes.languages || []),
    ...(project.attributes.tags || []),
  ];

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto pt-12 px-2 pb-24">
        {project.attributes.avatar && (
          <div className="pr-4 hidden md:block flex-shrink-0">
            <ProjectAvatar
              size={64}
              avatar={project.attributes.avatar}
              alt={project.attributes.name}
            />
          </div>
        )}
        <div>
          <h1 className="mt-2 mb-4 text-black-500 font-bold text-4xl font-accent">
            {project.attributes.name}
          </h1>
          <div className="mb-4">
            {badges.map((badge) => (
              <Tag key={badge} tag={badge} className="mr-2 mb-2" />
            ))}
          </div>
          <div className="md:flex mb-6">
            <RepoLinks frontmatter={project.attributes} />
            <RepoStats
              className="bg-white p-4 flex-shrink"
              stats={githubData}
            />
          </div>
        </div>
        <ProjectTabs
          hasContributingTab={hasContributingTab}
          hasOverviewTab={hasOverviewTab}
          hasLearnTab={hasLearnTab}
        />
        <div className="mb-8">
          <AnchorHeader id="overview">Overview</AnchorHeader>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: project.body.overview }}
          />
          <FeaturedCodeSeeMap
            organization={project.organization}
            featuredMap={project.attributes.featuredMap}
            featuredMapMetadata={featuredMapMetadata}
          />
          <div className="md:flex md:space-x-6 mt-8">
            <CurrentlySeeking
              currentlySeeking={project.attributes.currentlySeeking}
            />
            <ContributionOverview
              contributionOverview={project.attributes.contributionOverview}
            />
          </div>
        </div>
        <div className="mb-8">
          <AnchorHeader id="contributing">Contributing</AnchorHeader>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: project.body.contributing }}
          />
          <div className="md:flex md:space-x-4">
            <HelpWanted
              githubData={githubData}
              repoUrl={project.attributes.repoUrl}
            />
            <HacktoberfestIssues
              githubData={githubData}
              repoUrl={project.attributes.repoUrl}
            />
            <Maps maps={project.attributes.maps} mapsMetadata={{}} />
          </div>
        </div>
        <LearnSection learnLinks={project.attributes.learnLinks} />
      </div>
    </RootLayout>
  );
};

export default ProjectPage;
