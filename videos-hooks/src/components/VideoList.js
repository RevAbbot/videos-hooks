//import "./VideoList.css";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedList = videos.map((v) => {
    return (
      <VideoItem
        key={v.id.videoId}
        handleVideoSelect={handleVideoSelect}
        //key={v.id}
        video={v}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
