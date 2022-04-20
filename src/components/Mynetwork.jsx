import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import FlipMove from "react-flip-move";
import "./User.css";
import { Avatar } from "@mui/material";
import { SearchIcon } from "@chakra-ui/icons";

import {
  getUserError,
  getUserLoading,
  getUserSuccess,
} from "../Redux/users/actions.js";

function Mynetwork() {

  const [search, setSearch] = useState("");
  const [list,setList] = useState("");
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

  const deleteUser = (index) => {
    console.log(index);
    var newlist = list;
    newlist.splice(index,1);
    setList([...newlist]);
  }

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
    <div className="network">
    <div className="user">
      <div className="user_inputContainer">
        <div className="user_input">
         <h2> {users.length} Connections </h2>
         <div className="ip">
           <div className="option">
             <p>Sort By : </p>
           <select>
             <option value="f_name">First name</option>
             <option value="l_name">Last name</option>
           </select>
           </div>
            <div className="search">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search by name"
              onChange={(e) => setSearch(e.target.value)}
            />

         </div>
         </div>
          
          
        </div>
        <br />
        <hr />
      </div>
      <FlipMove>
        {users
        .filter((e) => {
          if(search === ""){
            return e
          }else{
            return (e.first_name.toLowerCase().includes(search.toLowerCase()) ||
            e.last_name.toLowerCase().includes(search.toLowerCase()));
          }
        })
        .map(({first_name,last_name,email},index) => (
          <div>
            <div className="post">
              <div className="post_header">
                <Avatar>{first_name[0]}</Avatar>
                <div className="post_info">
                  <h2>{first_name} {last_name}</h2>
                  <p>{email}</p>
                </div>
                <div>
                  
                </div>
                <button className="msg">Message</button>
                <button className="rem" onClick={() => deleteUser(index)}>Remove</button> 
              </div>
                   <hr />
            </div>
          </div>
        ))}
      </FlipMove>
      
    </div>
    <div>
      <h3 className="h3">Manage synced and imported contacts</h3>
      <div className="top">
        <h4>Add personal contacts</h4>
        <p>We’ll periodically import and store your contacts to help <br />
        you and others connect. You choose who to connect to <br />
        and who to invite.</p>
        <input type="text" placeholder="Your Email Address" /> <br />
        <button>Continue</button>
        <p>More Options</p>
      </div>
      <div className="bottom">
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" />
      </div>

    </div>
    </div>
  );
};
export default Mynetwork