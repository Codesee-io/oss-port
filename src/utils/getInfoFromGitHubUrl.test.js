const { getInfoFromGitHubUrl } = require("./getInfoFromGitHubUrl");

describe("getInfoFromGitHubUrl()", () => {
  test("works on a valid GitHub URL", () => {
    expect(
      getInfoFromGitHubUrl("https://github.com/Codesee-io/oss-port")
    ).toEqual({ owner: "Codesee-io", repoName: "oss-port" });

    expect(
      getInfoFromGitHubUrl("https://github.com/Codesee-io/oss-port/pulls")
    ).toEqual({ owner: "Codesee-io", repoName: "oss-port" });
  });

  test("returns undefined on an invalid URL", () => {
    expect(getInfoFromGitHubUrl("https://www.oss-port.com")).toEqual({
      owner: undefined,
      repoName: undefined,
    });

    expect(getInfoFromGitHubUrl("https://github.com/Codesee-io")).toEqual({
      owner: "Codesee-io",
      repoName: undefined,
    });
  });
});
