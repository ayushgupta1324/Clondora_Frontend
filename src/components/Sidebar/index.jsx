import React from "react";
import { Link } from "react-router-dom";
import { RouteStrings } from "Utils/Routes/RouteStrings";

const Sidebar = ({ toggleDrawer }) => {
  return (
    <div className="side-menu-wrapper">
      <Link onClick={toggleDrawer} to={RouteStrings.men}>
        <div className="menu-link sidebar-menu-link">Men</div>
      </Link>
      <Link onClick={toggleDrawer} to={RouteStrings.women}>
        <div className="menu-link sidebar-menu-link">Women</div>
      </Link>
      <Link onClick={toggleDrawer} to={RouteStrings.kids}>
        <div className="menu-link sidebar-menu-link">Children</div>
      </Link>
    </div>
  );
};

export default Sidebar;
