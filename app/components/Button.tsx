import React, { ButtonHTMLAttributes, FunctionComponent } from "react";
import cx from "classnames";

const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type = "button",
  className,
  ...otherProps
}) => {
  return (
    <button
      className={cx(
        "bg-yellow-200 text-black-500 supports-hover:hover:bg-yellow-300 rounded px-8 py-1 font-semibold",
        className
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
