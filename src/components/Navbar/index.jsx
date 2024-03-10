import './styles.scss'
import React,{ useState,useEffect } from 'react'
import { Box, Image, Flex, Text, Icon, Img } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Menubar from '../MenuItem'
import { BsHandbagFill } from "react-icons/bs"
import { RouteStrings } from '../../Utils/Routes/RouteStrings';
// import styles from './styles.module.css'
// import { useSelector } from 'react-redux'
// import { FaUserAlt } from "react-icons/fa"s

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate()
  // const {data}=useSelector((store)=>store.cart)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutsideDrawer = (event) => {
    if (!event.target.closest('.drawer') && !event.target.closest('#hamburgerIcon')) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideDrawer);
    return () => {
      document.removeEventListener('click', handleClickOutsideDrawer);
    };
  }, [])

  if (location.pathname.includes("admin")) {
    return <></>
  }

  return (
    <div className='navbar-container'>
        <Flex className='navbar-wrapper' alignItems={"center"} zIndex={"500"} justifyContent="space-around" position="fixed" w="100%" bg="white">
          <Box className='menu-logo-wrapper'>
            <GiHamburgerMenu id='hamburgerIcon' className='menu-icon' onClick={toggleDrawer}/>
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`} id='drawer'>
              <div className='offer-auth-wrapper'>
              <Img className='promo-image' alt='promo-image' src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/30/9eec0b69-d6e0-49dd-8bb3-127dd6a8d68f1698648116571-Flat_500--2-.jpg'/>
              <div className='auth-navigate-wrapper'>
                <div onClick={() => navigate(RouteStrings.signup)}>SIGNUP, </div>
                <div onClick={()=>navigate(RouteStrings.login)}>LOGIN</div>
              </div>
              </div>
            <Link onClick={toggleDrawer} to={RouteStrings.men}><div className='menu-link sidebar-menu-link'>Men</div></Link>
            <Link onClick={toggleDrawer} to={RouteStrings.women}><div className='menu-link sidebar-menu-link'>Women</div></Link>
            <Link onClick={toggleDrawer} to={RouteStrings.kids}><div className='menu-link sidebar-menu-link'>Children</div></Link>
            </div>
            {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
            <Link to="/"><Text fontSize={"20px"} fontWeight="500" >CLONDORA</Text></Link>
          </Box>
          <Flex className='menu-link-wrapper' gap="24px">
            <Link className='menu-link' to={RouteStrings.men}><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Men</Text></Link>
            <Link className='menu-link' to={RouteStrings.women}><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Women</Text></Link>
            <Link className='menu-link' to={RouteStrings.kids}><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Children</Text></Link>
          </Flex>
          <Flex gap="30px" alignItems={"center"}>
            <Icon as={AiOutlineSearch} fontSize={"20px"} fontWeight="500" />
            <Menubar />
          </Flex>
          <Link to={RouteStrings.cart}><Icon as={BsHandbagFill} fontSize={"20px"} fontWeight="500" /></Link>
          
        </Flex>
    </div>
  )
}

export default Navbar
