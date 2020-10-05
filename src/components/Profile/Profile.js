import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import LoginStatus from "../Login/LoginStatus";

import './Profile.css';

const Profile = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const userData = LoginStatus();
    let image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";    
    let name = "?";
    
    const onClick = () => {
      setIsActive(!isActive);
    }

    const handleClickLogOut = () => {
      localStorage.removeItem('USER-APP');
      if(LoginStatus()===null) {
        alert("Logged out!")
      }
      else {
        alert("Error ocurred, try again");
      }
      
    }

    if(userData!=null){
      image = userData.image;
      name = userData.name;
    }

    return(
        <div className="container">
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">          
            <span>{name}</span>          
            <img 
              src={image}
              alt="user"     
            /> 
          </button>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>              
              <li>                
              {userData !=null ?
                <a href="/#" onClick={handleClickLogOut}>Log out</a> : <Link to= "/login"> Login </Link> }
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    );

};

export default Profile;