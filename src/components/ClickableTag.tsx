import React, { FunctionComponent } from "react";
import { getFormattedTag } from "../utils/tags";
import cx from "classnames";

type Props = {
  tag: string;

  isActive?: boolean;
  onClick?: (tag: string) => void;
};

const ClickableTag: FunctionComponent<Props> = ({ tag, onClick, isActive }) => {
  return (
    <button
      type="button"
      className={cx(
        "inline-block border rounded-md px-2 py-1 text-xs text-black-400",
        {
          "border-black-100 hover:bg-white": !isActive,
          "border-primary-400 bg-primary-400 text-white": isActive,
        }
      )}
      onClick={() => onClick(tag)}
    >
      {getFormattedTag(tag)}
    </button>
  );
};

export default ClickableTag;
