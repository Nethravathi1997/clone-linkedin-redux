import React from 'react';

import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

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
  return (
    <div>
      <input type="text" placeholder='Email Address' name="email" onChange={handleChange} />
    <input type="text" placeholder='Password' name="password" onChange={handleChange} />
    <button onClick={() => {
      try{
        fetch('https://reqres.in/api/login',{
          method:"POST",
          body:JSON.stringify(form),
        });
        handleToken("12345");
        navigate(-1);
        
      }catch{
        alert("Something went wrong");
      }
    }}>Sign in</button>

    </div>
    
  )
}
