import {
    ADD_USER,
    ADD_USER_LOADING,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
    GET_USER_LOADING,
    GET_USER_SUCCESS,
    GET_USER_ERROR
  } from "./actionTypes";
  
  // const init = { counter: 0 };
  const init = { loading: false, users:[], error: false};
  
  export const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case ADD_USER:
        return {
          ...state,
          // counter: state.counter + payload,
          users: [...state.users, payload],
        };
      case ADD_USER_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ADD_USER_SUCCESS:
        return {
          ...state,
          users: [...state.users, payload],
          loading: false,
        };
  
      case ADD_USER_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      case GET_USER_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_USER_SUCCESS:
        return {
          ...state,
          users: payload,
          loading: false,
        };
  
      case GET_USER_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };