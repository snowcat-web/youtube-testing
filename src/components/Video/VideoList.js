import React from "react";
import VideoGridItem from "./VideoGridItem";
import VideoListItem from "./VideoListItem";
import "./VideoList.css";

const VideoList = (props) => {  
  const videoItems = props.videos.map((video) => {    
    if(props.format === "grid-video") {
      return (
        <VideoGridItem
          onUserSelected={props.onVideoSelect}
          key={video.etag}
          video={video}
        />
      );      
    }
    else {
      return(
        <VideoListItem
        onUserSelected={props.onVideoSelect}
          key={video.etag}
          video={video}
          />
      );
    } 
    
  });

  return (
    <nav className={props.format}>
      <ul>{videoItems}</ul>
    </nav>
  );
};

export default VideoList;
