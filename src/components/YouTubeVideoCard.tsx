import React, { FunctionComponent } from "react";

interface Props {
   youTubeID: string,
   title: string,
   body: string
}

const YouTubeVideoCard: FunctionComponent<Props> = ({ youTubeID, title, body }) => {
  const videoLink = `https://youtube.com/watch?v=${youTubeID}`;
  const imageLink = `https://img.youtube.com/vi/${youTubeID}/mqdefault.jpg`;
  const alt = `Video thumbnail for ${youTubeID}`;
  return (
    <a href={videoLink} className="flex bg-white py-4 px-4 mb-4" rel="noopener" target="_blank">
      <img width="320"  height=" 180" src={imageLink} alt={alt} className="mr-8" />
      <div className="flex flex-col justify-center text-black-500">
        <h3 className="font-semibold text-lg mb-4">{title}</h3>
        <p>{body}</p>
      </div>
    </a>
  );
};

export default YouTubeVideoCard;
