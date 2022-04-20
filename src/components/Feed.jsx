import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import FlipMove from "react-flip-move";
import "./Feed.css";
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
  addFeedError,
  addFeedLoading,
  addFeedSuccess,
  getFeedError,
  getFeedLoading,
  getFeedSuccess,
} from "../Redux/feeds/actions.js";

export const Feed = () => {
  const [text, setText] = useState("");

  const { loading, feeds, error } = useSelector(
    (state) => ({
      loading: state.feedsState.loading,
      feeds: state.feedsState.feeds,
      error: state.feedsState.error,
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
    getFeeds();
  }, []);

  async function getFeeds() {
    try {
      dispatch(getFeedLoading());
      const data = await fetch("http://localhost:3002/feeds").then((d) =>
        d.json()
      );

      dispatch(getFeedSuccess(data));
    } catch (err) {
      dispatch(getFeedError());
    }
  }
  const comment = () => {

  }

  const addFeed = () => {
    dispatch(addFeedLoading());
    fetch("http://localhost:3002/feeds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Nethravathi",
        description: "tnethravathi7@gmail.com",
        title: text,
      }),
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(addFeedSuccess(res));
        getFeeds();
      })
      .catch((err) => {
        dispatch(addFeedError(err));
      });
      setText("");
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={text}
              type="text"
              placeholder="Enter Feed"
              onChange={(e) => setText(e.target.value)}
            />

            <button
              onClick={() => {
                addFeed();
              }}
            >
              Add Feed
            </button>
          </form>
          
        </div>
        <div className="feed_inputOptions">
                <div><InputOption Icon = {ImageIcon} title='Photo' color='#70B5f9'/></div>
                <div onClick={() => {comment()}}><InputOption Icon = {SubscriptionsIcon} title='Video' color='#E7A33E'/></div>
                <InputOption Icon = {EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon = {CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
            </div>
      </div>
      <FlipMove>
        {feeds.map((e, i) => (
          <div key={i}>
            <div className="post">
              <div className="post_header">
                <Avatar>{e.name[0]}</Avatar>
                <div className="post_info">
                  <h2>{e.name}</h2>
                  <p>{e.description}</p>
                </div>
              </div>
              <div className="post_body">{e.title}</div>
              <div className="post_buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color='gray' />
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color='gray' />
            <InputOption Icon={ShareOutlinedIcon} title="Share" color='gray' />
            <InputOption Icon={SendOutlinedIcon} title="Send" color='gray' />
        </div>
            </div>
            
          </div>
        ))}
      </FlipMove>
    </div>
  );
};
