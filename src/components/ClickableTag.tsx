import React, { FunctionComponent } from "react";
import { getFormattedTag } from "../utils/tags";
import cx from "classnames";

type Props = {
  tag: string;

  isActive?: boolean;
  onClick?: (tag: string) => void;
};

const ClickableTag: FunctionComponent<Props> = ({
  tag,

  onClick,
  isActive,
}) => {
  return (
    <button
      type="button"
      className={cx(
        "inline-block rounded-md px-2 py-1 text-xs text-black-400",
        {
          "border-primary-400 bg-primary-50": isActive,
        }
      )}
      style={{ border: "1px solid #CDD3DF" }}
      onClick={() => onClick(tag)}
    >
      {getFormattedTag(tag)}
    </button>
  );
};

export default ClickableTag;
