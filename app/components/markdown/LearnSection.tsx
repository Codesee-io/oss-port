import type { FC } from "react";
import type { Project } from "~/types";
import AnchorHeader from "./AnchorHeader";
import FormattedLink from "./FormattedLink";

type Props = {
  learnLinks: Project["attributes"]["learnLinks"];
};

const LearnSection: FC<Props> = ({ learnLinks }) => {
  if (!learnLinks) {
    return null;
  }

  return (
    <div className="mb-8">
      <AnchorHeader id="learn">Learn</AnchorHeader>
      <p className="mb-4">
        Resources to learn more about our technology and community.
      </p>
      <ul className="list-inside list-disc text-black-400 text-sm">
        {learnLinks.map((link, index) => (
          <li key={index}>
            <FormattedLink href={link.url || ""}>{link.title}</FormattedLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearnSection;
