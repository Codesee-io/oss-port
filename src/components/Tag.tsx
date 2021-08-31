import React, { FunctionComponent } from "react";
import { getFormattedTag } from "../utils/tags";
import cx from "classnames";

type Props = {
  tag: string;
  className?: string;
};

const Tag: FunctionComponent<Props> = ({ tag, className }) => {
  return (
    <span
      className={cx(
        "inline-block rounded-md px-2 py-1 text-xs text-black-400",
        className
      )}
      style={{ border: "1px solid #CDD3DF" }}
    >
      {getFormattedTag(tag)}
    </span>
  );
};

export default Tag;
