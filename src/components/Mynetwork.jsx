import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import FlipMove from "react-flip-move";
import "./User.css";
import { Avatar } from "@mui/material";

import {
  getUserError,
  getUserLoading,
  getUserSuccess,
} from "../Redux/users/actions.js";

function Mynetwork() {

  const [search, setSearch] = useState("");
  console.log(search);

  const { users} = useSelector(
    (state) => ({
      users: state.usersState.users,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      dispatch(getUserLoading());
      const data = await fetch("http://localhost:3003/users").then((d) =>
        d.json()
      );

      dispatch(getUserSuccess(data));
    } catch (err) {
      dispatch(getUserError());
    }
  }
  return(
    <div className="user">
      <div className="user_inputContainer">
        <div className="user_input">
         <h2> {users.length} Connections </h2>
         <div className="ip">
           <select>
             <option value="">Sort by</option>
             <option value="f_name">First name</option>
             <option value="f_name">Last name</option>
           </select>
         <form>
            <input
              type="text"
              placeholder="Enter User"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

         </div>
          
          
        </div>
      </div>
      <FlipMove>
        {users
        .filter((e) => {
          if(search === ""){
            return e
          }else{
            return e.first_name.toLowerCase().includes(search.toLowerCase());
          }
        })
        .map((e, i) => (
          <div key={i}>
            <div className="post">
              <div className="post_header">
                <Avatar>{e.first_name[0]}</Avatar>
                <div className="post_info">
                  <h2>{e.first_name} {e.last_name}</h2>
                  <p>{e.email}</p>
                </div>
              </div>
              <button>Remove</button>      
            </div>
            
          </div>
        ))}
      </FlipMove>
    </div>
  );
};
export default Mynetwork