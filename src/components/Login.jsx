import { useState , useContext } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const [form, setForm] = useState({});
  const {handleToken} = useContext(AuthContext);

  // const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Enter Email"
      />
      <input
        type="text"
        onChange={handleChange}
        name="password"
        placeholder="Enter password"
      />

      <button onClick={() => {
        try{
          fetch('reqres.in/api/login',{
            method:"POST",
            body: JSON.stringify(form),
          });
          handleToken("1234");
          navigate(-1);
        }catch{
          //
        }
          
      }}>Sign in</button>
    </div>
  );
};