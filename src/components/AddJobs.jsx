import { useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./addJobs.css";

import {
  addJobError,
  addJobLoading,
  addJobSuccess,
} from "../Redux/Jobs/actions.js";

export const AddJobs = () => {
  const [text, setText] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [img, setImg] = useState("");

  const { jobs } = useSelector(
    (state) => ({
      jobs: state.jobsState.jobs,
    }),
    function (prev, curr) {
      if (prev.loading === curr.loading && prev.error === curr.error) {
        return true;
      }
      return false;
    }
  );
  const dispatch = useDispatch();

  const addJob = () => {
    dispatch(addJobLoading());
    fetch("http://localhost:3001/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: text,
        company: company,
        city: city,
        image: img,
        date: new Date().toLocaleString(),
      }),
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(addJobSuccess(res));
        
      })
      .catch((err) => {
        dispatch(addJobError(err));
      });
      alert("Job Posted Successfully!")
    setText("");
  };

  return (
    <div className="job">
        
      <div className="addjob">
      <h1>Find a great hire, fast</h1>
      <p>Rated #1 in delivering quality hires</p>
        <div className="job_input">
          <form >
              <br />
              <br />
              <label >Job title <span style={{color:"red",fontWeight:"500"}}>*</span></label>
            <input
              value={text}
              type="text"
              placeholder="Job Title"
              onChange={(e) => setText(e.target.value)}
            /> <br />
            <label >Company <span style={{color:"red",fontWeight:"500"}}>*</span></label>
            <input
              value={company}
              type="text"
              placeholder="Company"
              onChange={(e) => setCompany(e.target.value)}
            /> <br />
            <label >Job Location <span style={{color:"red",fontWeight:"500"}}>*</span></label>
            <input
              value={city}
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            /> <br />
            <label >Company Logo <span style={{color:"red",fontWeight:"500"}}>*</span></label>
            <input
              type="url"
              placeholder="Add Logo"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            /> <br />

            <button
              onClick={() => {
                addJob();
              }}
            >
              Get started for free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
