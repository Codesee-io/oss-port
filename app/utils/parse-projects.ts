import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";

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

function getSlugFromRepoUrl(repoUrl: string) {
  const github = "https://github.com/";
  const gitlab = "https://gitlab.com/";
  if (repoUrl.startsWith(github)) {
    const [org, name] = repoUrl.slice(github.length).split("/");
    return `${org}/${name}`.toLowerCase();
  }

  if (repoUrl.startsWith(gitlab)) {
    const [org, name] = repoUrl.slice(gitlab.length).split("/");
    return `${org}/${name}`.toLowerCase();
  }

  throw new Error(
    `Only GitHub and GitLab repositories are permitted at this time`
  );
}

async function exportProjectsToJson() {
  const outputPath = path.join(__dirname, "../projects.json");

  const projectsPath = path.join(__dirname, "../../projects");

  // Get all the mdx files inside the projects directory
  const allMdxFiles = await getAllMdxFiles(projectsPath, []);

  // Remove the template file
  const allProjects = allMdxFiles.filter(
    (f) => f !== path.join(projectsPath, "_template.mdx")
  );

  const projectsData = await Promise.all(
    allProjects.map(async (fileName) => {
      const file = await fs.readFile(path.join(fileName));

      const { attributes } = parseFrontMatter<{
        repoUrl: string;
        name: string;
        [key: string]: any;
      }>(file.toString());

      invariant(
        postHasValidAttributes(attributes),
        `${fileName} has invalid frontmatter`
      );

      const slug = getSlugFromRepoUrl(attributes.repoUrl);

      return {
        slug,
        attributes,
      };
    })
  );

  console.log(`Writing ${projectsData.length} projects to ${outputPath}`);
  await fs.writeFile(outputPath, JSON.stringify(projectsData, null, 2));
}

exportProjectsToJson();
