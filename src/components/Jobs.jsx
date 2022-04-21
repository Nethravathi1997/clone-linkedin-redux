import React from 'react'
import AddJobs from './AddJobs'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";
import "./addJobs.css";
import { Avatar } from "@mui/material";
import {
    getJobError,
    getJobLoading,
    getJobSuccess,
  } from "../Redux/Jobs/actions.js";

function Jobs() {
    const { loading, jobs, error } = useSelector(
        (state) => ({
          loading: state.jobsState.loading,
          jobs: state.jobsState.jobs,
          error: state.jobsState.error,
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
        getJobs();
      }, []);
    
      async function getJobs() {
        try {
          dispatch(getJobLoading());
          const data = await fetch("http://localhost:3004/jobs").then((d) =>
            d.json()
          );
    
          dispatch(getJobSuccess(data));
        } catch (err) {
          dispatch(getJobError());
        }
      }
  return (
      
    <div>
        <div>
        <Link to="/addjobs">
        <button>Post Job</button>
        </Link>

        </div>
        <div>
        <FlipMove>
        {jobs
        .sort((a,b) => {
              return b.date - a.date ;
          })
        .map(({date,title,company,city,image},index) => (
          <div key={index}>
            <div className="post">
              <div className="post_header">
                <Avatar>{image}</Avatar>
                <div className="post_info">
                  <img className='img' src={image} alt="" />
                  <p>{company}</p>
                  <p>{city}</p>
                  <p>{date}</p>
                </div>
              </div>
              <div className="post_body">{title}</div>
              <button>Apply</button>
            </div>
            
          </div>
        ))}
      </FlipMove>
        </div>
        
        
    </div>
  )
}

export default Jobs