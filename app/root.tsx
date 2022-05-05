import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStyles from "./styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: tailwindStyles }];
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

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black-30">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
