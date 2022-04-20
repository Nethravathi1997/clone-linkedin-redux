import { ADD_FEED, REMOVE_FEED } from "./actionTypes";
import {
  ADD_FEED_LOADING,
  ADD_FEED_SUCCESS,
  ADD_FEED_ERROR,
} from "./actionTypes";

import {
  GET_FEED_SUCCESS,
  GET_FEED_LOADING,
  GET_FEED_ERROR,
} from "./actionTypes";

export const addFeed = (data) => ({
  type: ADD_FEED,
  payload: data,
});
export const addFeedLoading = () => {
  return {
    type: ADD_FEED_LOADING,
  };
};

export const addFeedSuccess = (data) => {
  return {
    type: ADD_FEED_SUCCESS,
    payload: data,
  };
};

export const addFeedError = (err) => {
  return {
    type: ADD_FEED_ERROR,
    payload: err,
  };
};

export const getFeedSuccess = (data) => {
  return {
    type: GET_FEED_SUCCESS,
    payload: data,
  };
};
export const getFeedLoading = () => {
  return {
    type: GET_FEED_LOADING,
  };
};
export const getFeedError = (err) => {
  return {
    type: GET_FEED_ERROR,
    payload: err,
  };
};
export const removeFeed = (id) => ({
  type: REMOVE_FEED,
  payload: id,
});