import React, {useState, useEffect} from "react";
import YTSearch from "../components/YoutubeSearch";
import VideoBody from "../components/Video/VideoBody";
import Navigation from "../components/Navigation";
import { useLocation, useHistory } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
    const [placeholder, setPlaceholder] = useState("wizeline");
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);    
    const [searchTerm, setSearchTerm] = useState(placeholder);    
    const location = useLocation();
    const [favorite, setFavorite] = useState(true);
    let history = useHistory();

    useEffect(() => {
        if(location.state!==undefined){
            setSearchTerm(location.state.detail);
            setPlaceholder(location.state.detail);
            fetchResource(location.state.detail);
        }
        else{
            fetchResource(searchTerm);
        }
          
    }, []);

    useEffect(() => {
        if(location.pathname==="/"){
            setSelectedVideo(null);
        }
          
    }, [location]);

    const fetchResource = async (item) => {
        await YTSearch(
            {key: API_KEY, term: item},
            (data) => {
                setVideos(data);
            }
        );
    };

    const handleSearchChange = async (value) => {
        setVideos([]);
        setSearchTerm(value);
        setSelectedVideo(null);
        await fetchResource(value)
    };

    const addFavorite = (favorite) => {
        const favVideos = localStorage.getItem("favVideos") ? localStorage.getItem("favVideos") : null;
        let videos = [];
        if(favVideos!=null){            
            videos = JSON.parse(favVideos);         
        }        
        if (!favoritePresent(videos, favorite)) {            
            videos.push(favorite)            
            localStorage.setItem("favVideos", JSON.stringify(videos));
        }
        setFavorite(!favorite);
    }

    const favoritePresent = (allFavorites, favorite) => {        
        for (let i=0; i < allFavorites.length; i++) {
            if (allFavorites[i].etag === favorite.etag)
                return true;
        }
        return false;
    }

    const selectedVideoHandle = (video) => {
        setSelectedVideo(video);        
        history.push('/video');
      }

    return (
        <div>
            <Navigation onSearchChange={handleSearchChange}
                        placeholder = {placeholder} />
            <div className="content">
                <VideoBody onVideoSelect={selectedVideoHandle}
                           videos={videos}
                           videoSelected={selectedVideo}
                           addFavorite={addFavorite}
                           section={'home'}
                />                
            </div>
        </div>
    );
};

export default Home;