import {
    ADD_FEED,
    ADD_FEED_LOADING,
    ADD_FEED_SUCCESS,
    ADD_FEED_ERROR,
    GET_FEED_LOADING,
    GET_FEED_SUCCESS,
    GET_FEED_ERROR
  } from "./actionTypes";
  
  // const init = { counter: 0 };
  const init = { loading: false, feeds:[], error: false};
  
  export const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case ADD_FEED:
        return {
          ...state,
          // counter: state.counter + payload,
          feeds: [payload, ... state.feeds],
        };
      case ADD_FEED_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ADD_FEED_SUCCESS:
        return {
          ...state,
          feeds: [payload, ... state.feeds],
          loading: false,
        };
  
      case ADD_FEED_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      case GET_FEED_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_FEED_SUCCESS:
        return {
          ...state,
          feeds: payload,
          loading: false,
        };
  
      case GET_FEED_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };