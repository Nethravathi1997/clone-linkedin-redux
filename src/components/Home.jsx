import React from 'react'
import Sidebar from './sidebar'
import Widgets from './Widgets'
import { Feed } from './Feed'
import './Home.css'

function Home() {
  return (
    <div className='app_body'>
      <Sidebar />
      <Feed />
      <Widgets />
      </div>
    
  )
}

export default Home