import { ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";
import {
  ADD_COMMENT_LOADING,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
} from "./actionTypes";

import {
  GET_COMMENT_SUCCESS,
  GET_COMMENT_LOADING,
  GET_COMMENT_ERROR,
} from "./actionTypes";

export const addComment = (data) => ({
  type: ADD_COMMENT,
  payload: data,
});
export const addCommentLoading = () => {
  return {
    type: ADD_COMMENT_LOADING,
  };
};

export const addCommentSuccess = (data) => {
  return {
    type: ADD_COMMENT_SUCCESS,
    payload: data,
  };
};

export const addCommentError = (err) => {
  return {
    type: ADD_COMMENT_ERROR,
    payload: err,
  };
};

export const getCommentSuccess = (data) => {
  return {
    type: GET_COMMENT_SUCCESS,
    payload: data,
  };
};
export const getCommentLoading = () => {
  return {
    type: GET_COMMENT_LOADING,
  };
};
export const getCommentError = (err) => {
  return {
    type: GET_COMMENT_ERROR,
    payload: err,
  };
};
export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  payload: id,
});