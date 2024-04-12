import "./styles.scss";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsHandbagFill } from "react-icons/bs";
import { RouteStrings } from "Utils/Routes/RouteStrings";
import Menubar from "components/ProfileMenu";
import Sidebar from "components/Sidebar";
import SearchModal from "components/SearchModal";
// import { useSelector } from 'react-redux'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const {data}=useSelector((store)=>store.cart)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideDrawer);
    return () => {
      document.removeEventListener("click", handleClickOutsideDrawer);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutsideDrawer = (event) => {
    if (
      !event.target.closest(".drawer") &&
      !event.target.closest("#hamburgerIcon")
    ) {
      setIsDrawerOpen(false);
    }
  };

  if (location.pathname.includes("admin")) {
    return <></>;
  }

  return (
    <div className="navbar-container">
      <Flex
        className={`navbar-wrapper`}
        alignItems={"center"}
        zIndex={"500"}
        justifyContent="space-between"
        position="fixed"
        w="100%"
      >
        <Box className="menu-logo-wrapper">
          <GiHamburgerMenu
            id="hamburgerIcon"
            className="menu-icon"
            onClick={toggleDrawer}
          />
          <Sidebar
            className="sidebar"
            toggleDrawer={toggleDrawer}
            isDrawerOpen={isDrawerOpen}
          />
          <Link to="/">
            <Text
              className={`logo`}
              fontSize={"20px"}
              fontWeight="500"
            >
              CLONDORA
            </Text>
          </Link>
        </Box>
        <Flex className="menu-link-wrapper" gap="24px">
          <Link
            className={`menu-link`}
            to={RouteStrings.men}
          >
            <Text
              fontSize={"20px"}
              fontWeight="500"
              _hover={{ borderBottom: "1px solid black", cursor: "pointer" }}
            >
              Men
            </Text>
          </Link>
          <Link
            className={`menu-link`}
            to={RouteStrings.women}
          >
            <Text
              fontSize={"20px"}
              fontWeight="500"
              _hover={{ borderBottom: "1px solid black", cursor: "pointer" }}
            >
              Women
            </Text>
          </Link>
          <Link
            className={`menu-link`}
            to={RouteStrings.kids}
          >
            <Text
              fontSize={"20px"}
              fontWeight="500"
              _hover={{ borderBottom: "1px solid black", cursor: "pointer" }}
            >
              Children
            </Text>
          </Link>
        </Flex>
        <div className="menu-cart-wrapper">
          <SearchModal />
          <BsHandbagFill className="cart-logo" onClick={() => navigate(RouteStrings.cart)} />
          <Menubar />
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
