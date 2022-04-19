import React from 'react'
import './header.css'
import {SearchIcon} from '@chakra-ui/icons'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon  from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

  return (
    <div className='header'>
    <div className='header_left'>
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
    <div className='header_search'>
      <SearchIcon />
      <input type="text" placeholder='Search' />
    </div>
    </div>
    <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar= {true} title="me" />
    </div>
    </div>
  )
}

export default Header