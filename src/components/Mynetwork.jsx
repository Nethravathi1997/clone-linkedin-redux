import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import FlipMove from "react-flip-move";
import "./User.css";
import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import {
  addUserError,
  addUserLoading,
  addUserSuccess,
  getUserError,
  getUserLoading,
  getUserSuccess,
} from "../Redux/users/actions.js";

function Mynetwork() {

  const [text, setText] = useState("");

  const { loading, users, error } = useSelector(
    (state) => ({
      loading: state.usersState.loading,
      users: state.usersState.users,
      error: state.usersState.error,
    }),
    function (prev, curr) {
      if (prev.loading === curr.loading && prev.error === curr.error) {
        return true;
      }
      return false;
    }
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
  const comment = () => {

  }

  const addUser = () => {
   
      setText("");
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div className="user">
      <div className="user_inputContainer">
        <div className="user_input">
          <CreateIcon />
          <form>
            <input
              value={text}
              type="text"
              placeholder="Enter User"
              onChange={(e) => setText(e.target.value)}
            />

            <button
              onClick={() => {
                addUser();
              }}
            >
              Add User
            </button>
          </form>
          
        </div>
      </div>
      <FlipMove>
        {users.map((e, i) => (
          <div key={i}>
            <div className="post">
              <div className="post_header">
                <Avatar>{e.first_name[0]}</Avatar>
                <div className="post_info">
                  <h2>{e.first_name}</h2>
                  <p>{e.email}</p>
                </div>
              </div>
              <div className="post_body">{e.title}</div>
              
            </div>
            
          </div>
        ))}
      </FlipMove>
    </div>
  );
};
export default Mynetwork