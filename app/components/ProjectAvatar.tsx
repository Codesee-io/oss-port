import { FC } from "react";

type Props = {
  avatar: any;
  alt: string;
  size: number;
};

/**
 * This component renders project avatars. It supports most image formats like
 * PNG and JPG, as well as SVG.
 */
const ProjectAvatar: FC<Props> = ({ alt, avatar, size }) => {
  if (avatar) {
    return <img alt={alt} src={avatar} width={size} height={size} />;
  }

  // TODO render a placeholder here
  return null;
};

export default ProjectAvatar;
