import React, { AnchorHTMLAttributes, FunctionComponent } from "react";
import cx from "classnames";

const CallToAction: FunctionComponent<AnchorHTMLAttributes<HTMLAnchorElement>> =
  ({ children, className, ...otherProps }) => {
    return (
      <a
        className={cx(
          "bg-yellow-200 text-black-500 supports-hover:hover:bg-yellow-300 rounded px-8 py-2 font-semibold",
          className
        )}
        {...otherProps}
      >
        {children}
      </a>
    );
  };

export default CallToAction;
