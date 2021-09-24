import React, { FunctionComponent } from "react";
import { Link } from "gatsby";

type Props = {
  to: string;
};

const NavLink: FunctionComponent<Props> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="px-3 py-1 supports-hover:hover:bg-blue-900 inline-block rounded"
    >
      {children}
    </Link>
  );
};

export default NavLink;
