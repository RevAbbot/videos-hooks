import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("Golden State Warriors");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const renderContent = () => {
    return (
      <div className="ui container">
        <SearchBar handleSearchSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList handleVideoSelect={setSelectedVideo} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="videos-app">{renderContent()}</div>;
};

export default Videos;
