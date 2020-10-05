import React from 'react';

import VideoList from './VideoList';
import VideoSelected from './VideoSelected';

import './VideoList.css';

const VideoBody = (props) => {

  if('error' in props.videos){
    return(
      <div className="Message-title">        
        <p>{props.videos.error.message}</p>        
      </div>   
    );
  }

  if(props.section==='favorites' && props.videos.length===0){
    return(
      <div className="Message-title">        
        <p>No favorites added</p>        
      </div>   
    );
  }

  const addFavorite = (videoId) => {
    props.addFavorite(videoId)
  }

  if(props.videos.length === 0) {
    return(
      <div className="Loading-title">         
        <p>Loading...</p>
      </div>      
    );
  };

  if (props.videoSelected == null) {
    return (
      <VideoList onVideoSelect={props.onVideoSelect} videos={props.videos} format="grid-video" />
    );
  }
  else {
    return(
      <div className="Selected-container">
        <div><VideoSelected video={props.videoSelected}
                            addFavorite={addFavorite} 
                            fetchResource={props.fetchResource}
                            section={props.section}/></div>
        <div className="listed-videos">
          <VideoList onVideoSelect={props.onVideoSelect}
                      videos={props.videos} 
                      format="list-video" 
                      /></div>
      
      </div>
    );
  }
}

export default VideoBody;