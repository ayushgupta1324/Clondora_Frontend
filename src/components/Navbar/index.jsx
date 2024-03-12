import './styles.scss'
import React,{ useState,useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Box, Flex, Text, Img } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai"
import { BsHandbagFill } from "react-icons/bs"
import { RouteStrings } from 'Utils/Routes/RouteStrings';
import Menubar from 'components/ProfileMenu';
import SearchModal from 'components/SearchModal';
import Sidebar from 'components/Sidebar';
// import { useSelector } from 'react-redux'

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate()
  // const {data}=useSelector((store)=>store.cart)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSearchModal,setShowSearchModal] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideDrawer);
    return () => {
      document.removeEventListener('click', handleClickOutsideDrawer);
    };
  }, [])

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutsideDrawer = (event) => {
    if (!event.target.closest('.drawer') && !event.target.closest('#hamburgerIcon')) {
      setIsDrawerOpen(false);
    }
  };

  const handleSignupNavigate = () =>{
    toggleDrawer()
    navigate(RouteStrings.signup)
  }

  const handleLoginNavigate = () =>{
    toggleDrawer()
    navigate(RouteStrings.login)
  }

  if (location.pathname.includes("admin")) {
    return <></>
  }

  return (
    <div className='navbar-container'>
        <Flex className='navbar-wrapper' alignItems={"center"} zIndex={"500"} justifyContent="space-between" position="fixed" w="100%" bg="white">
          <Box className='menu-logo-wrapper'>
            <GiHamburgerMenu id='hamburgerIcon' className='menu-icon' onClick={toggleDrawer}/>
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`} id='drawer'>
              <div className='offer-auth-wrapper'>
              <Img className='promo-image' alt='promo-image' src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/30/9eec0b69-d6e0-49dd-8bb3-127dd6a8d68f1698648116571-Flat_500--2-.jpg'/>
              <div className='auth-navigate-wrapper'>
                <div onClick={() => handleSignupNavigate()}>SIGNUP, </div>
                <div onClick={()=>handleLoginNavigate()}>LOGIN</div>
              </div>
              </div>
              <Sidebar toggleDrawer={toggleDrawer}/>
            </div>
            {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
            <Link to="/"><Text fontSize={"20px"} fontWeight="500" >CLONDORA</Text></Link>
          </Box>
          <Flex className='menu-link-wrapper' gap="24px">
            <Link className='menu-link' to={RouteStrings.men}><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Men</Text></Link>
            <Link className='menu-link' to={RouteStrings.women}><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Women</Text></Link>
            <Link className='menu-link' to={RouteStrings.kids}><Text fontSize={"20px"} fontWeight="500"  _hover={{borderBottom:"1px solid black",cursor:"pointer"}}>Children</Text></Link>
          </Flex>
          <div className='menu-cart-wrapper'>
          <AiOutlineSearch onClick={() => setShowSearchModal(true)}/>
          <BsHandbagFill className='cart-logo' onClick={()=>navigate(RouteStrings.cart)}/>
          <Menubar />
          </div>
        </Flex>
        {/* {
          showSearchModal && <SearchModal className='search-modal'/>
        } */}
    </div>
  )
}

export default Navbar
