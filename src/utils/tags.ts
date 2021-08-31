const KNOWN_TAGS = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  graphql: "GraphQL",
  html: "HTML",
} as const;

export function getFormattedTag(tag: string) {
  const formattedTag = tag.toLowerCase().trim();

  // If we have a matching tag, use it
  if (KNOWN_TAGS[formattedTag] != null) {
    return KNOWN_TAGS[formattedTag];
  }

  // Otherwise, capitalize the first letter of every word
  return formattedTag
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}
