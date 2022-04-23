import {
    ADD_COMMENT,
    ADD_COMMENT_LOADING,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR,
    GET_COMMENT_LOADING,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_ERROR
  } from "./actionTypes";
  
  // const init = { counter: 0 };
  const init = { loading: false, comments:[], error: false};
  
  export const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case ADD_COMMENT:
        return {
          ...state,
          comments: [payload, ... state.comments],
        };
      case ADD_COMMENT_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ADD_COMMENT_SUCCESS:
        return {
          ...state,
          comments: [payload, ... state.comments],
          loading: false,
        };
  
      case ADD_COMMENT_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      case GET_COMMENT_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_COMMENT_SUCCESS:
        return {
          ...state,
          comments: payload,
          loading: false,
        };
  
      case GET_COMMENT_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };