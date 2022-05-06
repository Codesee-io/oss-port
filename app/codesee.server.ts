import axios from "axios";
import type { CodeSeeMapMetadata } from "./types";

const codeseeAPIToken = process.env.CODESEE_API_TOKEN;

/**
 * Returns a map ID from a URL. If the URL is malformed, we return `undefined`.
 * Valid URLs start like this:
 * - https://app.codesee.io/maps/public/<map ID>
 * - https://app.codesee.io/maps/<map ID>
 *
 * Note that we do not validate the ID we return.
 */
function getCodeSeeMapIdFromUrl(url: string) {
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

export async function getCodeSeeMapMetadata(mapUrl: string) {
  const mapId = getCodeSeeMapIdFromUrl(mapUrl);
  if (!mapId) {
    return undefined;
  }

  if (!codeseeAPIToken) {
    return undefined;
  }

  const metadata: CodeSeeMapMetadata | undefined = await axios
    .get(`https://app.codesee.io/api/maps/public/${mapId}/metadata`, {
      headers: { Authorization: `Bearer ${codeseeAPIToken}` },
    })
    .then(({ data }) => {
      return data.metadata;
    })
    .catch(() => {
      console.warn(`Unable to fetch CodeSee map metadata for ${mapId}`);
    });

  return metadata;
}
