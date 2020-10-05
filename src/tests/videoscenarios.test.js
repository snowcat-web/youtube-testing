import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoBody from '../components/Video/VideoBody';

describe("Video Body scenarios", () => {
    it("displays error message", () => {
        const videos = {
            error: { 
                message: "error test"
            }
        }
        render(<VideoBody 
                videos={videos} />);
  
        expect(screen.getByText("error test")).toBeTruthy();
    });
  
    it("displays error message", () => {
        const videos = [];
        const section = "favorites";
        render(<VideoBody 
                videos={videos}
                section={section} />);
  
        expect(screen.getByText("No favorites added")).toBeTruthy();
    });

    it("displays loading message", () => {
        const videos = [];        
        render(<VideoBody 
                videos={videos} />);
  
        expect(screen.getByText("Loading...")).toBeTruthy();
    });
  });
  
