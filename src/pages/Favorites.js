import React, {useEffect, useState} from 'react';
import Navigation from '../components/Navigation';
import VideoBody from '../components/Video/VideoBody';
import { useLocation, useHistory } from "react-router-dom";

const Favorites = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  let history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchResource();
  }, []);

  useEffect(() => {
    if(location.pathname==="/favorites"){
        setSelectedVideo(null);
    }
      
}, [location]);

  const fetchResource = () => {
    const favVideos = localStorage.getItem("favVideos");
    if (favVideos != null) {
      setVideos(JSON.parse(favVideos));
    }

  };

  const handleSearchChange = async (value) => {
    history.push({
      pathname: '/',
      state: {detail: value}
  });    
  };

  const addFavorite = (favorite) => {
    const favVideos = localStorage.getItem("favVideos") ? localStorage.getItem("favVideos") : null;
    let videos = [];
    if (favVideos != null) {
      videos = JSON.parse(favVideos);
    }
    videos.push(favorite)
    localStorage.setItem("favVideos", JSON.stringify(videos));
    setVideos(videos);
  }

  const selectedVideoHandle = (video) => {    
    setSelectedVideo(video);
    history.push('/favorites/video/');
  }

  return (
    <div>
        <Navigation onSearchChange={handleSearchChange} />
        <div className="content">
          <VideoBody            
            onVideoSelect={selectedVideoHandle}
            videos={videos}
            videoSelected={selectedVideo}
            section={'favorites'}
            fetchResource={fetchResource}
            addFavorite={addFavorite}
          />
        </div>
      </div>
    );

}

export default Favorites;