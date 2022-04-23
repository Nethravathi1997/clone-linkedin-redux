import React from 'react';

import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import './Login.css';

export const Login = () =>{

  const[form,setForm] = useState({})
  const {handleToken} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = ({target: {name, value}})=> {
    setForm({
      ...form,
      [name]: value,
    })
  }
  var num = Math.floor(1000 + Math.random() * 9000)
  return (
    <div style={{
      background:"white",
      height:"11cm",
      paddingBottom:"5cm" , 
      border: "20px solid rgb(243,242,239)",
      marginLeft: "11cm",
       }}>
      <div className='box'>
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
      <input type="text" placeholder='Email or Phone' name="email" onChange={handleChange} /> <br />
    <input type="text" placeholder='Password' name="password" onChange={handleChange} /> <br />
    <button onClick={() => {
      try{
        
        alert("5684");
        
      }catch{
        alert("Something went wrong");
      }
    }}>Get OTP</button> <br /> <br />

    <hr />

    <input type="num" placeholder='Enter OTP' id='otp'/> <br />
    <button onClick={() => {
      let num = "5684"
      let x = document.getElementById("otp").value;
      console.log(x);
      if(x === num){
      handleToken("12345");
      navigate(-1);
      }else{
        alert("wrong_otp")
      }

    }}
    >Sign In</button>

      </div>
      

    </div>
    
  )
}
