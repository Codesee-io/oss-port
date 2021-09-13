import React, { FunctionComponent } from "react";
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
          "border-black-100 hover:bg-blue-500 hover:border-blue-500 hover:text-white":
            !isActive,
          "border-blue-700 bg-blue-700 text-white": isActive,
        }
      )}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default ClickableTag;
