const { getCodeSeeMapIdFromUrl } = require("./getCodeSeeMapMetadata");

describe("getCodeSeeMapIdFromUrl()", () => {
  test("works on a valid map URL", () => {
    // Public map URL
    expect(
      getCodeSeeMapIdFromUrl("https://app.codesee.io/maps/public/111-222-333")
    ).toEqual("111-222-333");

    // Non-public map URL
    expect(
      getCodeSeeMapIdFromUrl("https://app.codesee.io/maps/111-222-333")
    ).toEqual("111-222-333");

    // URL with some extra path
    expect(
      getCodeSeeMapIdFromUrl(
        "https://app.codesee.io/maps/public/111-222-333/extra-path"
      )
    ).toEqual("111-222-333");
  });

  test("returns undefined on an invalid URL", () => {
    expect(getCodeSeeMapIdFromUrl("https://www.codesee.io/")).toBe(undefined);
    expect(
      getCodeSeeMapIdFromUrl("https://www.codesee.io/maps/public/111-222-333")
    ).toBe(undefined);
    expect(
      getCodeSeeMapIdFromUrl("https://www.gatsby.com/maps/public/111-222-333")
    ).toBe(undefined);
    expect(getCodeSeeMapIdFromUrl("https://app.codesee.io/maps/public/")).toBe(
      undefined
    );
  });
});
