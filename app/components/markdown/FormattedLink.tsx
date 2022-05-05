import React, { FunctionComponent } from "react";

type Props = {
  href: string;
};

const FormattedLink: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="markdown-element"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default FormattedLink;
