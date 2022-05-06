import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import tailwindStyles from "./styles/index.css";

export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "OSS Port",
  description:
    "Find your next open-source project! On OSS Port, maintainers advertise their projects for free and make it easy to onboard new contributors",
  // Facebook open graph tags
  "og:url": "https://www.oss-port.com",
  "og:type": "website",
  "og:title": "Onboard open-source contributors on OSS Port",
  "og:description":
    "Contribute, maintain, and impact the open-source communities you care about.",
  "og:image": "https://www.oss-port.com/ossport_opengraph_v1.png",
  "og:image:width": "1200",
  "og:image:height": "630",
  "og:image:type": "image/png",

  // Twitter open graph tags
  "twitter:card": "summary_large_image",
  "twitter:site": "@Codeseeio",
  "twitter:title": "Onboard open-source contributors on OSS Port",
  "twitter:description":
    "Contribute, maintain, and impact the open-source communities you care about.",
  "twitter:image": "https://www.oss-port.com/ossport_twitter_v1.png",
  "twitter:image:alt": "TODO",
});

export async function loader() {
  return json({
    fathomSiteId: process.env.FATHOM_SITE_ID,
  });
}

export default function App() {
  const { fathomSiteId } = useLoaderData<{ fathomSiteId?: string }>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black-30">
        <Outlet />
        {fathomSiteId && (
          <script
            src="https://cdn.usefathom.com/script.js"
            data-site={fathomSiteId}
            data-spa="auto"
            defer
          />
        )}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
