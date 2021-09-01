import React from "react";

export default {
  p: ({ children }) => <p className="markdown-element">{children}</p>,
  a: ({ children, href }) => (
    <a
      className="markdown-element"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ),
  li: ({ children }) => <li className="markdown-element">{children}</li>,
  ul: ({ children }) => <ul className="markdown-element">{children}</ul>,
  ol: ({ children }) => <ol className="markdown-element">{children}</ol>,
};
