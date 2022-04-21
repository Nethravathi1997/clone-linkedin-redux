import { ADD_JOB, REMOVE_JOB } from "./actionTypes";
import {
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  ADD_JOB_ERROR,
} from "./actionTypes";

import {
  GET_JOB_SUCCESS,
  GET_JOB_LOADING,
  GET_JOB_ERROR,
} from "./actionTypes";

export const addJob = (data) => ({
  type: ADD_JOB,
  payload: data,
});
export const addJobLoading = () => {
  return {
    type: ADD_JOB_LOADING,
  };
};

export const addJobSuccess = (data) => {
  return {
    type: ADD_JOB_SUCCESS,
    payload: data,
  };
};

export const addJobError = (err) => {
  return {
    type: ADD_JOB_ERROR,
    payload: err,
  };
};

export const getJobSuccess = (data) => {
  return {
    type: GET_JOB_SUCCESS,
    payload: data,
  };
};
export const getJobLoading = () => {
  return {
    type: GET_JOB_LOADING,
  };
};
export const getJobError = (err) => {
  return {
    type: GET_JOB_ERROR,
    payload: err,
  };
};
export const removeJob = (id) => ({
  type: REMOVE_JOB,
  payload: id,
});