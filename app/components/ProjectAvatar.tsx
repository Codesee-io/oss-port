import { FC } from "react";

type Props = {
  image: any;
  alt: string;
  size: number;
};

/**
 * This component renders project avatars. It supports most image formats like
 * PNG and JPG, as well as SVG.
 */
const ProjectAvatar: FC<Props> = ({ alt, image, size }) => {
  if (image.publicURL) {
    return <img alt={alt} src={image.publicURL} width={size} height={size} />;
  }

  // TODO render a placeholder here
  return null;
};

export default ProjectAvatar;
