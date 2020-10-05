import React from 'react';
import './sideNav.css';

const sideNavButton = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
    </button>
);

export default sideNavButton;