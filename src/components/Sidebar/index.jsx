import "./styles.scss";
import { Img } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RouteStrings } from "Utils/Routes/RouteStrings";

const Sidebar = ({ toggleDrawer, isDrawerOpen }) => {
  const navigate = useNavigate();

  const handleSignupNavigate = () => {
    toggleDrawer();
    navigate(RouteStrings.signup);
  };

  const handleLoginNavigate = () => {
    toggleDrawer();
    navigate(RouteStrings.login);
  };

  return (
    <div className="side-menu-wrapper">
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`} id="drawer">
        <div className="offer-auth-wrapper">
          <Img
            className="promo-image"
            alt="promo-image"
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/30/9eec0b69-d6e0-49dd-8bb3-127dd6a8d68f1698648116571-Flat_500--2-.jpg"
          />
          <div className="auth-navigate-wrapper">
            <div onClick={() => handleSignupNavigate()}>SIGNUP, </div>
            <div onClick={() => handleLoginNavigate()}>LOGIN</div>
          </div>
        </div>
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
      {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </div>
  );
};

export default Sidebar;
