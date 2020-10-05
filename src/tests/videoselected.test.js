import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoSelected from '../components/Video/VideoSelected';
import VideoListItem from '../components/Video/VideoListItem';
import VideoGridItem from '../components/Video/VideoGridItem';

const videoListProps = {
    "kind":"youtube#searchResult",
    "etag":"Jiak50jVoJ9_Uscl6Dwcb7VySqI",
    "id":{
      "kind":"youtube#video",
      "videoId":"nmXMgqjQzls"},
    "snippet":{
      "publishedAt":"2019-09-30T23:54:32Z",
      "channelId":"UCPGzT4wecuWM0BH9mPiulXg",
      "title":"Title Testing",
      "description":"Description Testing",
      "thumbnails":{
        "default":{
          "url":"https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
          "width":120,
          "height":90},
        "medium":{
          "url":"https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
          "width":320,"height":180},
        "high":{
            "url":"https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
            "width":480,
            "height":360}},
      "channelTitle":"Wizeline",
      "liveBroadcastContent":"none",
      "publishTime":"2019-09-30T23:54:32Z"}
          } ;


describe("Video Selected", () => {
  it("displays loading", () => {
        render(<VideoSelected 
        video={null} />);
        expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("displays video selected", () => {
    render(<VideoSelected
        video={videoListProps}
        />);

        expect(screen.getByText("Title Testing")).toBeTruthy();
        expect(screen.getByText("Description Testing")).toBeTruthy();
  }); 
});

describe("Video displayed in grid", () => {
    it("displays video item list individually", () => {
        render(<VideoListItem 
          video={videoListProps} />);
  
        expect(screen.getByText("Title Testing")).toBeTruthy();
    });
    it("displays video item grid individually", () => {
        render(<VideoGridItem 
          video={videoListProps} />);
  
        expect(screen.getByText("Title Testing")).toBeTruthy();
    });   
});