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
        <Link to="/" style={{
          textDecoration:"none",
        }}>
          <HeaderOption Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/mynetwork" style={{
          textDecoration:"none",
        }}>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        </Link>
        <Link to="/jobs" style={{
          textDecoration:"none",
        }}>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        </Link>
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <Link to="/login" style={{
          textDecoration:"none",    
          marginTop:"-10px",  
       }}>
           <img className="myimg" src="https://media-exp1.licdn.com/dms/image/C5603AQGfv8dnagAUuw/profile-displayphoto-shrink_400_400/0/1639128811499?e=1655942400&v=beta&t=TTLA68roivY_D_0EmcQCI0-CP66R1987jWRyP741Nyc" alt="" /> 
        </Link>
      </div>
    </div>
  );
}

export default Header;
