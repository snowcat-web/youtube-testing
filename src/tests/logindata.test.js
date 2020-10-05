import React from 'react';
import SideNav from '../components/SideNav/sideNav';
import { BrowserRouter } from 'react-router-dom';
import {LoginStatus} from '../components/Login/LoginStatus';

/*let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  process.env = Object.assign(process.env, { REACT_APP_API_KEY:'AIzaSyANHO4_fHKcbu0tkEuoduttxrMxA33jXfA' });
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});*/

jest.mock("../components/Login/LoginStatus", () => {

    return {
      LoginStatus: jest.fn(() => {
        return { name: "test", image: "imageTest" };
      })
    };
});

    describe("Profile data", () => {
    it("checks name", () => {    
      const result = LoginStatus();
      expect(result.name).toBe("test");
      expect(result.image).toBe("imageTest");
  
    });
  });
