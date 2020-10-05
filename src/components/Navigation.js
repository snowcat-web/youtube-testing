import React, { useState } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideNav from "./SideNav/sideNav";
import Backdrop from "./Backdrop/Backdrop";

const Navigation = (props) => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

   const sideNavOpenHandler = () => {
     setSideNavOpen(!sideNavOpen);
     return false;
   };

   const sideNavCloseHandler = () => {
     setSideNavOpen(false);
   };

  let backdrop = null;

  if (sideNavOpen) {
     backdrop = <Backdrop click={sideNavCloseHandler} />;
  }

  return (
    <div>
      <Toolbar sideNavOpenHandler={sideNavOpenHandler}
      onSearchChange={props.onSearchChange}
      placeholder = {props.placeholder}  />
      <SideNav show={sideNavOpen} />
      {backdrop}
      </div>    
  );
};

export default Navigation;