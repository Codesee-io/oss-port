import React, { ButtonHTMLAttributes, FC } from "react";
import cx from "classnames";

const SecondaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type = "button",
  className,
  ...otherProps
}) => {
  return (
    <button
      className={cx(
        "bg-black-30 text-black-300 supports-hover:hover:bg-white border border-gray-300 rounded px-4 py-1 font-medium",
        className
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
