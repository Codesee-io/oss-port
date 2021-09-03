import React, { FunctionComponent, useContext } from "react";
import ProjectContext from "../ProjectContext";
import AnchorHeader from "./AnchorHeader";
import FormattedLink from "./FormattedLink";

const LearnSection: FunctionComponent = () => {
  const { frontmatter } = useContext(ProjectContext);

  if (!frontmatter?.learnLinks) {
    return null;
  }

  return (
    <div className="mb-8">
      <AnchorHeader id="learn">Learn</AnchorHeader>
      <p className="mb-4">
        Resources to learn more about our technology and community.
      </p>
      <ul className="list-inside list-disc">
        {frontmatter.learnLinks.map((link, index) => (
          <li key={index}>
            <FormattedLink href={link.url}>{link.title}</FormattedLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnSection;
