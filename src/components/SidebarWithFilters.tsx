import React, { FunctionComponent } from "react";
import Checkbox from "./Checkbox";

type Props = {
  allLanguages: string[];
  allTags: string[];
  allSeeking: string[];
};

const SidebarWithFilters: FunctionComponent<Props> = ({
  allLanguages,
  allTags,
  allSeeking,
}) => {
  return (
    <aside className="fixed hidden right-0 top-0 bottom-0 bg-white w-72 text-black-500">
      <div className="sticky top-0 p-4">
        <h3>Filters</h3>
      </div>

      <div className="p-4">
        <h4 className="font-semibold mb-3">Language</h4>
        {allLanguages.map((language) => (
          <Checkbox
            key={language}
            labelProps={{ className: "block mb-2 text-sm" }}
          >
            {language}
          </Checkbox>
        ))}
        <h4 className="font-semibold mb-3 mt-6">Focus</h4>
        {allTags.map((tag) => (
          <Checkbox key={tag} labelProps={{ className: "block mb-2 text-sm" }}>
            {tag}
          </Checkbox>
        ))}
        <h4 className="font-semibold mb-3 mt-6">Currently seeking</h4>
        {allSeeking.map((seeking) => (
          <Checkbox
            key={seeking}
            labelProps={{ className: "block mb-2 text-sm" }}
          >
            {seeking}
          </Checkbox>
        ))}
      </div>
    </aside>
  );
};

export default SidebarWithFilters;
