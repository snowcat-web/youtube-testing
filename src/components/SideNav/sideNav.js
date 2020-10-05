import React from 'react';
import { Link } from 'react-router-dom';
import LoginStatus from "../Login/LoginStatus";

import './sideNav.css';

const sideNav = props => {
    let userData = null;
    if(props.logged != undefined) {
        userData = props.logged;
    }
    else{
        userData = LoginStatus();
    }
    var navBarClasses = 'side-nav';
    if (props.show) {
        navBarClasses = 'side-nav open';
    }
    return (
        <nav className={navBarClasses}>
        <ul>
            <li><Link to="/"> Videos </Link> </li>
            {userData!=null &&
            <li> <Link to= "/favorites"> Favorites </Link>  </li>
            }
        </ul>
    </nav>

    );

};
    
export default sideNav