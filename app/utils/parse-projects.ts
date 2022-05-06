import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { Project } from "../types";

// Configure our markdown parser
const md = require("markdown-it")({
  html: true, // Allows HTML in the markdown
  breaks: true, // Outputs new lines a <br/> tags
});

// Add support for Slack-style emojis :tada:
const emoji = require("markdown-it-emoji");
md.use(emoji);

function postHasValidAttributes(attributes: any) {
  return (
    attributes.hasOwnProperty("name") && attributes.hasOwnProperty("repoUrl")
  );
}

async function getAllMdxFiles(dirName: string, files: string[]) {
  const allDirectories = await fs.readdir(dirName);
  for (const fileName of allDirectories) {
    const filePath = path.join(dirName, fileName);
    if ((await fs.stat(path.join(dirName, fileName))).isDirectory()) {
      files = await getAllMdxFiles(filePath, files);
    } else if (fileName.endsWith(".mdx")) {
      files.push(dirName + "/" + fileName);
    }
  }

  return files;
}

function getRepoOwnerAndName(repoUrl: string) {
  const github = "https://github.com/";
  const gitlab = "https://gitlab.com/";

  if (repoUrl.startsWith(github)) {
    const [owner, name] = repoUrl.slice(github.length).split("/");
    return { owner, name };
  }

  if (repoUrl.startsWith(gitlab)) {
    const [owner, name] = repoUrl.slice(gitlab.length).split("/");
    return { owner, name };
  }

  throw new Error(
    `Only GitHub and GitLab repositories are permitted at this time`
  );
}

function getSlugFromRepoUrl(repoUrl: string) {
  const { owner, name } = getRepoOwnerAndName(repoUrl);
  return `${owner}/${name}`.toLowerCase();
}

const CONTRIBUTING_TAGS = ["<Contributing>", "</Contributing>"];
const OVERVIEW_TAGS = ["<Overview>", "</Overview>"];

function extractSectionFromContent(
  content: string,
  startTag: string,
  endTag: string
) {
  if (content.includes(startTag) && content.includes(endTag)) {
    const from = content.indexOf(startTag) + startTag.length;
    const to = content.indexOf(endTag);
    return content.slice(from, to).trim();
  }
  return "";
}

function parseMarkdown(content: string) {
  return md.render(content);
}

async function exportProjectsToJson() {
  const outputPath = path.join(__dirname, "../projects.json");

  const projectsPath = path.join(__dirname, "../../public/projects");

  // Get all the mdx files inside the projects directory
  const allMdxFiles = await getAllMdxFiles(projectsPath, []);

  // Remove the template file
  const allProjects = allMdxFiles.filter(
    (f) => f !== path.join(projectsPath, "_template.mdx")
  );

  const projectsData = await Promise.all(
    allProjects.map(async (fileName) => {
      const file = await fs.readFile(path.join(fileName));

      const { attributes, body } = parseFrontMatter<{
        repoUrl: string;
        name: string;
        [key: string]: any;
      }>(file.toString());

      invariant(
        postHasValidAttributes(attributes),
        `${fileName} has invalid frontmatter`
      );

      const slug = getSlugFromRepoUrl(attributes.repoUrl);
      const { owner } = getRepoOwnerAndName(attributes.repoUrl);
      if (attributes.avatar) {
        const splitPath = fileName.split("/");
        const parentFolder = splitPath[splitPath.length - 2];
        attributes.avatar =
          "/projects/" + parentFolder + "/" + attributes.avatar;
      }

      // Parse the <Contributing> and <Overview> sections in the markdown
      let contributing = extractSectionFromContent(
        body,
        CONTRIBUTING_TAGS[0],
        CONTRIBUTING_TAGS[1]
      );
      contributing = parseMarkdown(contributing);

      let overview = extractSectionFromContent(
        body,
        OVERVIEW_TAGS[0],
        OVERVIEW_TAGS[1]
      );
      overview = parseMarkdown(overview);

      const project: Project = {
        slug,
        attributes,
        body: {
          contributing,
          overview,
        },
        organization: owner,
      };
      return project;
    })
  );

  console.log(`Writing ${projectsData.length} projects to ${outputPath}`);
  await fs.writeFile(outputPath, JSON.stringify(projectsData, null, 2));
}

exportProjectsToJson();
