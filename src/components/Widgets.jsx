import React from 'react'
import "./widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {
const newsArticle = (heading, subtitle) => {
    <div className='widgets_article'>
        <div className='widgets_articleLeft'>
            <FiberManualRecordIcon />
        </div>
        <div className='widgets_articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
}

  return (
      <div>
    <div className='widgets'>
        <div className="widgets_header">
            <h2> <li>Blackouts across India</li> </h2>
            <InfoIcon />
        </div>
        <p className='sub'>1d ago , 12,799 readers</p>
        <div className="widgets_header">
            <h2> <li>Infosys clause faces backlash</li></h2>
            <InfoIcon />
            
        </div>
        <p className='sub'>1d ago , 11,125 readers</p>
        <div className="widgets_header">
            <h2><li>Attrition to rice at India Inc</li></h2>
            <InfoIcon />
            
        </div>
        <p className='sub'>9d ago , 44,695 readers</p>
        <div className="widgets_header">
            <h2><li>EV makers go big on hiring</li></h2>
            <InfoIcon />
            
        </div>
        <p className='sub'>19h ago , 2,949 readers</p>

        <div className="widgets_header">
            <h2><li>Eating out is getting costlier</li></h2>
            <InfoIcon />
            
        </div>
        <p className='sub'>2d ago , 5,097 readers</p>
        <br />
        <hr />

        <div style={{
            textAlign:"center",
            fontSize: "14px",
            padding:"10px",
            color:"gray",
        }}>
            <p>Nethravathi, stay informed on industry news and trends</p>
            <img style={{
                height:"70px",
                width:"70px",
            }} src="https://media-exp1.licdn.com/dms/image/C4E0EAQEr5uvXP5OpTA/rightRail-logo-shrink_100_100/0/1644932446005?e=2147483647&v=beta&t=iCy7hFdZEi93fBxhbrzGsrJ73zO6u0FPnVn1p5zDfAo" alt="" />
            <p>Nethravathi keep up with the latest insightsfrom <b>OMC Power</b></p>
            <button style={{
                height:"30px",
                width:"100px",
                borderRadius:"15px",
                border:"none",
                border: "1px solid rgb(10,102,194)",
                color:"rgb(10,102,194)",
                background:"white",
            }}>Follow</button>
        </div>


        
    </div>
    
    </div>
  )
}

export default Widgets