import React from "react";
import "./header.css";
import { SearchIcon } from "@chakra-ui/icons";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from "react";


function Header() {
  const navigate = useNavigate();
  const {handleToken} = useContext(AuthContext);

  

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <Link to="/">
          <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/mynetwork">
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        </Link>
        <Link to="/jobs">
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        </Link>
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <Link to="/login">
          <HeaderOption avatar={true} title="me" />
        </Link>
        <button>Sign out</button>
      </div>
    </div>
  );
}

export default Header;
