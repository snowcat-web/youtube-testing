import React from "react";
import "./VideoList.css";

const VideoListItem = (props) => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onUserSelected(video)}>
      <div className="list-item-container">
        <div>
        <img className="media-object" src={imageUrl} alt="video preview"   />
        </div>
        <div>
        <span style={{ fontWeight: 'bold' }}> {video.snippet.title} </span> 
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
