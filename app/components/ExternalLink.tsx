import React, { AnchorHTMLAttributes, FunctionComponent } from "react";

const ExternalLink: FunctionComponent<AnchorHTMLAttributes<HTMLAnchorElement>> =
  ({ children, ...props }) => (
    <a
      target="_blank"
      rel="noopener"
      className="font-medium text-blue-500 supports-hover:hover:text-blue-700 supports-hover:hover:underline"
      {...props}
    >
      {children}
    </a>
  );

export default ExternalLink;
