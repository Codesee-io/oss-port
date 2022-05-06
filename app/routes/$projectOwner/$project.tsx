import { FC } from "react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useCatch, Link } from "@remix-run/react";
import RootLayout from "../../components/RootLayout";
import ProjectAvatar from "../../components/ProjectAvatar";
import RepoLinks from "../../components/RepoLinks";
import RepoStats from "../../components/RepoStats";
import ProjectTabs from "../../components/ProjectTabs";
import Tag from "../../components/Tag";
import { getProject } from "../../projects.server";
import type { Project } from "../../types";

export const loader: LoaderFunction = ({ params }) => {
  const { projectOwner, project: projectName } = params;

  const project = getProject(projectOwner + "/" + projectName);

  // If we couldn't find a matching project, throw a 404
  // https://remix.run/docs/en/v1/guides/not-found
  if (!project) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json(project);
};

export const meta: MetaFunction = ({ data }) => {
  if (data?.attributes?.name) {
    return { title: `OSS Port | ${data.attributes.name}` };
  }

  return {
    title: `OSS Port | 404`,
  };
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

const Project: FC = () => {
  const project = useLoaderData<Project>();

  // Dynamically populate the tabs based on the existing sections
  const hasOverviewTab = false; // project.body.includes("mdx(Overview,");
  const hasContributingTab = false; // project.body.includes("mdx(Contributing,");
  const hasLearnTab = project.attributes.learnLinks?.length > 0;

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
              image={project.attributes.avatar}
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
            {/* <RepoStats
              className="bg-white p-4 flex-shrink"
              stats={githubData}
            /> */}
          </div>
        </div>
        <ProjectTabs
          hasContributingTab={hasContributingTab}
          hasOverviewTab={hasOverviewTab}
          hasLearnTab={hasLearnTab}
        />
        {/* <ProjectContextProvider
          value={{
            frontmatter: project.attributes,
            githubData,
            featuredMapMetadata,
            mapsMetadata,
            organization: project.parent.organization,
          }}
        >
          <MDXProvider components={mdxComponents}>
            <MDXRenderer>{project.body}</MDXRenderer>
          </MDXProvider>
          <LearnSection />
        </ProjectContextProvider> */}
      </div>
    </RootLayout>
  );
};

export default Project;
