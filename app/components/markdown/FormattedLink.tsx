import type { FC } from "react";

type Props = {
  href: string;
};

const FormattedLink: FC<Props> = ({ href, children }) => (
  <a
    href={href}
    className="text-blue-500 font-bold hover:underline"
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default FormattedLink;
