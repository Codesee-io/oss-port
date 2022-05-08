import React, { FunctionComponent } from "react";
import cx from "classnames";

type Props = {
  tag: string;
  className?: string;
  isActive?: boolean;
};

const Tag: FunctionComponent<Props> = ({ tag, className, isActive }) => {
  return (
    <span
      className={cx(
        "inline-block rounded-md px-2 py-1 text-xs border",
        className,
        {
          "text-black-400 border-black-100": !isActive,
          "bg-blue-50 border-blue-500 text-blue-700": isActive,
        }
      )}
    >
      {tag}
    </span>
  );
};

export default Tag;
