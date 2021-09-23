import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import Checkbox from "./Checkbox";
import useSearch from "./local-search/useSearch";
import cx from "classnames";
import CloseIcon from "./icons/CloseIcon";
import SidebarButton from "./sidebar/SidebarButton";
import { pluralize } from "../utils/formatting";

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
  const { filterByTag, allActiveTags, filteredProjectIds } = useSearch();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(
    function preventBodyScroll() {
      if (showMobileFilters) {
        document.body.classList.add("prevent-mobile-scroll");
      } else {
        document.body.classList.remove("prevent-mobile-scroll");
      }
    },
    [showMobileFilters]
  );

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    filterByTag(value);
  };

  return (
    <>
      <div
        data-qa="sidebar-backdrop"
        className={cx("sidebar-backdrop", { active: showMobileFilters })}
        onClick={() => setShowMobileFilters(false)}
      />
      <aside
        data-qa="sidebar"
        className={cx("sidebar flex-shrink-0 flex flex-col", {
          active: showMobileFilters,
        })}
      >
        <div className="sticky top-0 p-4 text-black-500 shadow-menu sm:shadow-none flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          {allActiveTags.length > 0 && (
            <span className="flex-grow text-black-300 ml-4">
              {filteredProjectIds.length}{" "}
              {pluralize(filteredProjectIds.length, "result", "results")}
            </span>
          )}
          <button
            className="sm:hidden"
            onClick={() => setShowMobileFilters(false)}
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 text-black-500 max-h-full overflow-auto pb-12">
          <h4 className="font-semibold mb-3">Language</h4>
          {allLanguages.map((language) => (
            <Checkbox
              onChange={onCheckboxChange}
              value={language}
              key={language}
              labelProps={{ className: "mb-2 sm:text-sm" }}
            >
              {language}
            </Checkbox>
          ))}
          <h4 className="font-semibold mb-3 mt-6">Focus</h4>
          {allTags.map((tag) => (
            <Checkbox
              onChange={onCheckboxChange}
              value={tag}
              key={tag}
              labelProps={{ className: "mb-2 sm:text-sm" }}
            >
              {tag}
            </Checkbox>
          ))}
          <h4 className="font-semibold mb-3 mt-6">Currently seeking</h4>
          {allSeeking.map((seeking) => (
            <Checkbox
              onChange={onCheckboxChange}
              value={seeking}
              key={seeking}
              labelProps={{ className: "mb-2 sm:text-sm" }}
            >
              {seeking}
            </Checkbox>
          ))}
        </div>
      </aside>
      <SidebarButton
        onClick={() => setShowMobileFilters((prev) => !prev)}
        numFilters={allActiveTags.length}
      />
    </>
  );
};

export default SidebarWithFilters;
