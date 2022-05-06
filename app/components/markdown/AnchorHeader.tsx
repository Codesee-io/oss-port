import { LinkIcon } from "@primer/octicons-react";
import type { FC } from "react";

type Props = {
  id: string;
};

const AnchorHeader: FC<Props> = ({ children, id }) => (
  <h2 className="text-xl text-black-500 font-bold mb-4 relative anchor-reveal">
    <a
      id={id}
      className="anchor opacity-0 absolute -left-6 h-full flex items-center justify-center w-6"
      aria-hidden="true"
      href={`#${id}`}
    >
      <LinkIcon size={12} />
    </a>
    {children}
  </h2>
);

export default AnchorHeader;
