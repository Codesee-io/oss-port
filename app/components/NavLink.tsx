import React, { FunctionComponent } from "react";
import { Link } from "@remix-run/react";
import ExternalLink from "../components/ExternalLink";

type Props = {
  to: string;
};

function isExternalLink(url: string) {
  return url.startsWith("http");
}

const NavLink: FunctionComponent<Props> = ({ children, to }) => {
  if (isExternalLink(to)) {
    return (
      <ExternalLink
        href={to}
        className="px-3 py-1 supports-hover:hover:bg-blue-900 inline-block rounded"
      >
        {children}
      </ExternalLink>
    );
  }

  return (
    <Link
      to={to}
      className="px-3 py-1 supports-hover:hover:bg-blue-900 inline-block rounded"
    >
      {children}
    </Link>
  );
};

export default NavLink;
