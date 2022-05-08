import projects from "./data/projects.json";
import type { Project, ProjectCategory } from "./types";

export function getProjects() {
  return projects as Array<Project>;
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const matchingProject = getProjects().find(
    (project) => project.slug === slug.toLowerCase()
  );
  return matchingProject;
}

export function getProjectsMetadata() {
  const allLanguagesMap = new Map<string, number>();
  const allTagsMap = new Map<string, number>();
  const allSeekingMap = new Map<string, number>();

  getProjects().forEach((project) => {
    if (project.attributes.languages != null) {
      project.attributes.languages.forEach((language) => {
        const matchingLanguage = allLanguagesMap.get(language) || 0;
        allLanguagesMap.set(language, matchingLanguage + 1);
      });
    }

    if (project.attributes.tags != null) {
      project.attributes.tags.forEach((tag) => {
        const matchingTag = allTagsMap.get(tag) || 0;
        allTagsMap.set(tag, matchingTag + 1);
      });
    }

    if (project.attributes.currentlySeeking != null) {
      project.attributes.currentlySeeking.forEach((seeking) => {
        const matchingSeeking = allSeekingMap.get(seeking) || 0;
        allSeekingMap.set(seeking, matchingSeeking + 1);
      });
    }
  });

  const allLanguages: ProjectCategory[] = Array.from(allLanguagesMap).map(
    ([fieldValue, totalCount]) => ({ fieldValue, totalCount })
  );
  const allTags: ProjectCategory[] = Array.from(allTagsMap).map(
    ([fieldValue, totalCount]) => ({ fieldValue, totalCount })
  );
  const allSeeking: ProjectCategory[] = Array.from(allSeekingMap).map(
    ([fieldValue, totalCount]) => ({ fieldValue, totalCount })
  );

  return { allLanguages, allTags, allSeeking };
}

export function generateSearchIndex() {
  return getProjects().map((project) => ({
    slug: project.slug,
    languages: project.attributes.languages,
    tags: project.attributes.tags,
    description: project.attributes.description,
    name: project.attributes.name,
  }));
}
