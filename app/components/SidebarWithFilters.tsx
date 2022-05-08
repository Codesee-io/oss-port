import React, {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
} from "react";
import Checkbox from "./Checkbox";
import useSearch from "./local-search/useSearch";
import cx from "classnames";
import CloseIcon from "./icons/CloseIcon";
import SidebarButton from "./sidebar/SidebarButton";
import { pluralize } from "../utils/formatting";
import SecondaryButton from "./SecondaryButton";

type Props = {
  allLanguages: string[];
  allTags: string[];
  allSeeking: string[];
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

const SidebarWithFilters: FunctionComponent<Props> = ({
  allLanguages,
  allTags,
  allSeeking,
  showSidebar,
  setShowSidebar,
}) => {
  const { filterByTag, allActiveTags, filteredProjectIds, clearAllTags } =
    useSearch();

  useEffect(
    function preventBodyScroll() {
      if (showSidebar) {
        document.body.classList.add("prevent-mobile-scroll");
      } else {
        document.body.classList.remove("prevent-mobile-scroll");
      }
    },
    [showSidebar]
  );

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    filterByTag(value);
  };

  return (
    <>
      <div
        data-qa="sidebar-backdrop"
        className={cx("sidebar-backdrop", { active: showSidebar })}
        onClick={() => setShowSidebar(false)}
      />
      <aside
        data-qa="sidebar"
        className={cx("sidebar flex-shrink-0 flex flex-col bg-black-30", {
          active: showSidebar,
        })}
      >
        <div className="text-black-500 shadow-menu p-4 md:px-8 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Filters</h3>
          {allActiveTags.length > 0 && (
            <>
              <span className="flex-grow text-black-300 ml-4">
                {filteredProjectIds.length}{" "}
                {pluralize(filteredProjectIds.length, "result", "results")}
              </span>
              <SecondaryButton onClick={clearAllTags} className="mr-6">
                Clear
              </SecondaryButton>
            </>
          )}

          <button onClick={() => setShowSidebar(false)}>
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 md:px-8 text-black-500 max-h-full overflow-auto pb-12">
          <h4 className="font-semibold mb-3">Language</h4>
          {allLanguages.map((language) => (
            <Checkbox
              onChange={onCheckboxChange}
              value={language}
              checked={allActiveTags.includes(language)}
              key={language}
              labelProps={{ className: "mb-1" }}
            >
              {language}
            </Checkbox>
          ))}
          <h4 className="font-semibold mb-3 mt-6">Focus</h4>
          {allTags.map((tag) => (
            <Checkbox
              onChange={onCheckboxChange}
              value={tag}
              checked={allActiveTags.includes(tag)}
              key={tag}
              labelProps={{ className: "mb-1" }}
            >
              {tag}
            </Checkbox>
          ))}
          <h4 className="font-semibold mb-3 mt-6">Currently seeking</h4>
          {allSeeking.map((seeking) => (
            <Checkbox
              onChange={onCheckboxChange}
              value={seeking}
              checked={allActiveTags.includes(seeking)}
              key={seeking}
              labelProps={{ className: "mb-1" }}
            >
              {seeking}
            </Checkbox>
          ))}
        </div>
      </aside>
      <SidebarButton
        onClick={() => setShowSidebar(true)}
        numFilters={allActiveTags.length}
      />
    </>
  );
};

export default SidebarWithFilters;
