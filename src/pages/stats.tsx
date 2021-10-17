import React, { FC } from "react";
import RootLayout from "../components/RootLayout";
import LogoWhiteBackground from "../images/LogoWhiteBackground";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

type Props = {
  data: {
    allProjects: {
      nodes: { id: string; frontmatter: { featuredMap?: { url: string } } }[];
      allLanguages: {
        fieldValue: string;
        totalCount: number;
      }[];
      allTags: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
    site: {
      buildTime: string;
    };
  };
};

const StatsPage: FC<Props> = ({ data: { allProjects, site } }) => {
  const buildDate = new Date(site.buildTime).toLocaleString("en", {
    timeZone: "UTC",
    hour12: false,
    dateStyle: "full",
    timeStyle: "long",
  });

  const firstTimerFriendlyTag = allProjects.allTags.find(
    (tag) => tag.fieldValue === "First Timer Friendly"
  );
  const numFirstTimerFriendlyIssues = firstTimerFriendlyTag?.totalCount || 0;
  const numLanguages = allProjects.allLanguages.length;
  const numProjects = allProjects.nodes.length;

  const sortedLanguages = allProjects.allLanguages
    .sort((a, b) => Math.sign(b.totalCount - a.totalCount))
    .slice(0, 5);

  const sortedTags = allProjects.allTags
    .sort((a, b) => Math.sign(b.totalCount - a.totalCount))
    .slice(0, 5);

  const numMaps = allProjects.nodes.filter(
    (project) => project.frontmatter.featuredMap !== null
  ).length;
  const percentMaps = ((numMaps / numProjects) * 100).toFixed();

  return (
    <RootLayout>
      <Helmet title="OSS Port | Stats" />
      <main className="py-12 md:py-20 px-4 max-w-xl mx-auto">
        <LogoWhiteBackground style={{ width: 400 }} className="mx-auto" />
        <h1 className="text-3xl font-accent leading-relaxed text-center mt-4 mb-8">
          Stats and trends
        </h1>
        <h2 className="text-xl text-black-500 font-bold mb-2">
          Raw project stats
        </h2>
        <ul className="list-disc list-inside mb-12">
          <li>{numProjects} projects listed</li>
          <li>{numFirstTimerFriendlyIssues} 'First Timer Friendly' projects</li>
          <li>{numLanguages} languages and frameworks represented</li>
          <li>
            {numMaps} projects feature a CodeSee map! That's {percentMaps}% of
            them 🎉
          </li>
        </ul>
        <h2 className="text-xl text-black-500 font-bold mb-2">Trends</h2>
        <div className="space-y-1 mb-4">
          <p>The 5 most frequent languages and frameworks are:</p>
          <ol className="list-decimal list-inside">
            {sortedLanguages.map((lang) => (
              <li key={lang.fieldValue}>{lang.fieldValue}</li>
            ))}
          </ol>
        </div>
        <div className="space-y-1 mb-16">
          <p>The 5 most frequent tags are:</p>
          <ol className="list-decimal list-inside">
            {sortedTags.map((lang) => (
              <li key={lang.fieldValue}>{lang.fieldValue}</li>
            ))}
          </ol>
        </div>
        <p className="text-black-200 text-sm text-center mb-8">
          Compiled on {buildDate}
        </p>
      </main>
    </RootLayout>
  );
};

export const pageQuery = graphql`
  query StatsQuery {
    site {
      buildTime
    }
    allProjects: allMdx(limit: 1000) {
      allLanguages: group(field: frontmatter___languages) {
        fieldValue
        totalCount
      }
      allTags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        id
        frontmatter {
          featuredMap {
            url
          }
        }
      }
    }
  }
`;

export default StatsPage;
