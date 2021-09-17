import React, { FunctionComponent } from "react";
import CodeSeeWordmark from "../images/CodeSeeWordmark";

const Footer: FunctionComponent = () => (
  <footer className="bg-black-50 text-black-400 px-4 py-8 mt-20">
    <p className="text-sm text-center flex items-center justify-center">
      Built with tea and love by{" "}
      <a
        className="opacity-75 supports-hover:hover:opacity-100 ml-1"
        href="https://www.codesee.io"
        target="_blank"
        rel="noopener"
        aria-label="CodeSee"
      >
        <CodeSeeWordmark className="h-4" />
      </a>
    </p>
  </footer>
);

export default Footer;
