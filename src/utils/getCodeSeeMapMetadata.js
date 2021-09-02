const axios = require("axios");
const URL = require("url").URL;

const codeseeAPIToken = process.env.CODESEE_API_TOKEN;

async function getCodeSeeMapMetadata(mapUrl, cache) {
  // Figure out the map ID from its URL
  let mapId;
  let featuredMapMetadata;
  try {
    // The featuredMap can either be a full URL or just an ID
    const testURL = new URL(mapUrl);
    if (testURL.host === "app.codesee.io") {
      mapId = testURL.pathname.substring(`/maps/public/`.length);
    }
  } catch (_) {}

  if (!mapId) {
    return undefined;
  }

  // Check the cache first!
  const today = new Date().toISOString().substr(0, 10); // YYYY-MM-DD
  const cacheKey = `codesee:map:metadata:${mapId}:${today}`;
  const cached = await cache.get(cacheKey);
  if (cached && !process.env.GITHUB_IGNORE_BUILD_CACHE) {
    return cached;
  }

  // If there's nothing in the cache, fetch the metadata from CodeSee
  if (mapId) {
    await axios
      .get(`https://app.codesee.io/api/maps/public/${mapId}/metadata`, {
        headers: { Authorization: `Bearer ${codeseeAPIToken}` },
      })
      .then(({ data }) => {
        featuredMapMetadata = data.metadata;
      });
  }

  if (featuredMapMetadata) {
    await cache.set(cacheKey, featuredMapMetadata);
  }

  return featuredMapMetadata;
}

module.exports = getCodeSeeMapMetadata;
