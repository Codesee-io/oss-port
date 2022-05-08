import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  // Permanently redirect from /learn to /resources
  return redirect("/resources", 301);
};
