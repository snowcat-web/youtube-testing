import React from 'react';
import SideNav from '../components/SideNav/sideNav';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe("Side Nav", () => {
    it("checks links with favorites displayed", () => {                
        render(<BrowserRouter> <SideNav logged={true} /> </BrowserRouter> );
        expect(screen.getByText("Videos")).toBeTruthy();
        expect(screen.getByText("Favorites")).toBeTruthy();
    });

    it("checks links without favorites displayed", () => {                
        render(<BrowserRouter> <SideNav /> </BrowserRouter> );
        expect(screen.getByText("Videos")).toBeTruthy();
        expect(screen.queryByText("Favorites")).toBeFalsy();
    });
  });