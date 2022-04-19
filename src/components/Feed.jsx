import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import FlipMove from "react-flip-move"
import "./Feed.css";
import {
  addFeedError,
  addFeedLoading,
  addFeedSuccess,
  getFeedError,
  getFeedLoading,
  getFeedSuccess,
} from "../Redux/actions.js";

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

  const addFeed = () => {
    dispatch(addFeedLoading());
    fetch("http://localhost:3002/feeds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        status: false, 
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
      </div>
<FlipMove>
      {feeds.map((e, i) => (
        <div key={i}>
          {e.title} - {e.status ? "Done" : "Not Done"}
        </div>
      ))}
      </FlipMove>
    </div>
  );
};
