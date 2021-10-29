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
      className={cx("secondary-button", className)}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
