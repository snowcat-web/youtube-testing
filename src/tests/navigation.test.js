import React from 'react';
import { render, screen } from '@testing-library/react';
import Toolbar from '../components/Toolbar/Toolbar'
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';

let container = null;

const navigationProps = ( {
  placeholder:"placeholderTest",
  sideNavOpenHandler: "sideNavOpenHandlerTest"
});

beforeEach(() => {
  // setup a DOM element as a render target
  process.env = Object.assign(process.env, { REACT_APP_API_KEY:'AIzaSyANHO4_fHKcbu0tkEuoduttxrMxA33jXfA' });
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("Navigation", () => {

    it("checks placeholder", () => {
      render(<BrowserRouter><Toolbar placeholder="placeholderTest" /> </BrowserRouter>);
      expect(screen.getAllByRole("textbox").length).toBe(1);
      expect(screen.getByPlaceholderText('placeholderTest'));
    });
  
  
});

describe("Login page", () => {
    it("checks 2 buttons render in login page", () => {
      render(<Login />);
      expect(screen.getAllByRole("button").length).toBe(2);
    });
  });
  