import "./styles.scss";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";
import { userLogout } from "redux/AuthReducer/action";

const Menubar = ({ item1, item2 }) => {
  const { name, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    toast({
      title: "Logged out Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    navigate("/");
    dispatch(userLogout());
  };

  return (
    <div className="menu-container">
      <Menu>
        <MenuButton as={Button} className="menu-button">
          <Link to="/login">
            {name ? (
              <Text fontWeight={"500"} fontSize="20px">
                {name}
              </Text>
            ) : (
              <div>
                <FaRegUser className="profile-logo" />
              </div>
              // <Icon className='profile-logo' as={FaRegUser} fontSize={"20px"} fontWeight="500" />
            )}
          </Link>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/signup">
              <Flex gap="20px" alignItems={"center"}>
                <Icon as={FaUserPlus} fontSize={"20px"} fontWeight="500" />
                <Text fontSize={"20px"} fontWeight="500">
                  Signup
                </Text>
              </Flex>
            </Link>
          </MenuItem>
          <MenuItem>
            {token ? (
              <Flex gap="20px" alignItems={"center"} onClick={handleLogout}>
                <Icon as={FaUserPlus} fontSize={"20px"} fontWeight="500" />

                <Text fontSize={"20px"} fontWeight="500">
                  Logout
                </Text>
              </Flex>
            ) : (
              <Link to="/login">
                <Flex gap="20px" alignItems={"center"}>
                  <Icon as={TbLogin} fontSize={"20px"} fontWeight="500" />
                  <Text fontSize={"20px"} fontWeight="500">
                    Login
                  </Text>
                </Flex>
              </Link>
            )}
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Menubar;
