import { ADD_USER, REMOVE_USER } from "./actionTypes";
import {
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
} from "./actionTypes";

import {
  GET_USER_SUCCESS,
  GET_USER_LOADING,
  GET_USER_ERROR,
} from "./actionTypes";

export const addUser = (data) => ({
  type: ADD_USER,
  payload: data,
});
export const addUserLoading = () => {
  return {
    type: ADD_USER_LOADING,
  };
};

export const addUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

export const addUserError = (err) => {
  return {
    type: ADD_USER_ERROR,
    payload: err,
  };
};

export const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};
export const getUserLoading = () => {
  return {
    type: GET_USER_LOADING,
  };
};
export const getUserError = (err) => {
  return {
    type: GET_USER_ERROR,
    payload: err,
  };
};
export const removeUser = (id) => ({
  type: REMOVE_USER,
  payload: id,
});