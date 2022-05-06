import type { FC, SVGProps } from "react";

const MapIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 18L1 22V6L8 2M8 18L16 22M8 18V2M16 22L23 18V2L16 6M16 22V6M16 6L8 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MapIcon;
