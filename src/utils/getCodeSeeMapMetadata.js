const axios = require("axios");
const URL = require("url").URL;

const codeseeAPIToken = process.env.CODESEE_API_TOKEN;
let warned = false;

/**
 * Returns a map ID from a URL. If the URL is malformed, we return `undefined`.
 * Valid URLs start like this:
 * - https://app.codesee.io/maps/public/<map ID>
 * - https://app.codesee.io/maps/<map ID>
 *
 * Note that we do not validate the ID we return.
 */
function getCodeSeeMapIdFromUrl(url) {
  try {
    // The featuredMap can either be a full URL or just an ID
    const mapUrl = new URL(url);

    const { host, pathname } = mapUrl;

    // We expect the URL to contain /maps/public or /map
    if (host === "app.codesee.io") {
      const splitPath = pathname.split("/").filter((x) => !!x);

      if (pathname.startsWith("/maps/public/")) {
        if (splitPath.length >= 3) {
          return splitPath[2];
        }
      } else if (pathname.startsWith("/maps/") && splitPath.length >= 2) {
        return splitPath[1];
      }
    }
  } catch (_) {}

  return undefined;
}

/**
 * Fetch the metadata for featured CodeSee maps. If the user doesn't have a
 * CodeSee API token, we skip this step. However, contributors can preview their
 * changes when opening pull requests in GitHub.
 */
async function getCodeSeeMapMetadata(mapUrl, cache) {
  if (!codeseeAPIToken) {
    return undefined;
  }

  // Figure out the map ID from its URL
  const mapId = getCodeSeeMapIdFromUrl(mapUrl);
  let featuredMapMetadata;

  if (!mapId) {
    return undefined;
  }

  // Check the cache first!
  const today = new Date().toISOString().substr(0, 10); // YYYY-MM-DD
  const cacheKey = `codesee:map:metadata:${mapId}:${today}`;
  const cached = await cache.get(cacheKey);
  if (cached && !process.env.CODESEE_IGNORE_BUILD_CACHE) {
    return cached;
  }

  // If there's nothing in the cache, fetch the metadata from CodeSee
  if (mapId) {
    if (!codeseeAPIToken) {
      if (!warned) {
        console.warn(
          "No Codesee API Token set, CodeSee Maps will not be rendered properly."
        );
        warned = true;
      }
      return;
    }
    await axios
      .get(`https://app.codesee.io/api/maps/public/${mapId}/metadata`, {
        headers: { Authorization: `Bearer ${codeseeAPIToken}` },
      })
      .then(({ data }) => {
        featuredMapMetadata = data.metadata;
      })
      .catch(() => {
        console.warn(
          "Invalid CodeSee map URL, skipping featured map generation"
        );
      });
  }

  if (featuredMapMetadata) {
    await cache.set(cacheKey, featuredMapMetadata);
  }

  return featuredMapMetadata;
}

module.exports = { getCodeSeeMapMetadata, getCodeSeeMapIdFromUrl };
