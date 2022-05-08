/**
 * Returns the owner and repository name from a GitHub URL.
 *
 * @example getInfoFromGitHubUrl("https://github.com/Codesee-io/oss-port")
 * // { owner: "Codesee-io", repoName: "oss-port" }
 */
function getInfoFromGitHubUrl(repoUrl) {
  try {
    const testURL = new URL(repoUrl);
    if (testURL.hostname === "github.com") {
      const [owner, repoName] = repoUrl
        .substr("https://github.com/".length)
        .split("/");

      return {
        owner,
        repoName,
      };
    }
  } catch (_) {}

  return { owner: undefined, repoName: undefined };
}

module.exports = { getInfoFromGitHubUrl };
