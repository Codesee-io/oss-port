import React, { FunctionComponent } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = {
  image: any;
  alt: string;
  size: number;
};

/**
 * This component renders project avatars. It supports most image formats like
 * PNG and JPG, as well as SVG.
 * To access the proper data, structure your GraphQL query like this:
 * avatar {
 *   publicURL # This is how SVGs are pulled in
 *   childImageSharp { # This is how raster images are pulled in
 *     gatsbyImageData(
         width: 64
         placeholder: BLURRED
         formats: [AUTO, WEBP, AVIF]
       )
 *   }
 * }
 * 
 * @see gatsby-plugin-image
 */
const ProjectAvatar: FunctionComponent<Props> = ({ alt, image, size }) => {
  if (image.childImageSharp != null) {
    const parsedImage = getImage(image);
    return (
      <GatsbyImage image={parsedImage} alt={alt} className="rounded-full" />
    );
  }

  if (image.publicURL) {
    return <img alt={alt} src={image.publicURL} width={size} height={size} />;
  }

  // TODO render a placeholder here
  return null;
};

export default ProjectAvatar;
