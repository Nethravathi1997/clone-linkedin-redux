import { Avatar } from '@mui/material';
import userEvent from '@testing-library/user-event';
import React from 'react'
import './sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='Sidebar'>
        <div className="sidebar_top">
            <img src="https://i1.wp.com/www.burning-glass.com/wp-content/uploads/coding_400x267-1.jpg?fit=400%2C267&ssl=1" alt="" />
            <Avatar className='sidebar_avatar'>
                
            </Avatar>
            <h2>Nethravathi</h2>
            <h4>tnethravathi7@gmail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>5632</p>
            </div>
            <div className="sidebar_stat">
            <p>Views on post</p>
                <p className='sidebar_statNumber'>4523</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('Programming')}
            {recentItem('software development')}
            {recentItem('Projects')}
            {recentItem('developer')}

        </div>
    </div>
  )
}

export default Sidebar