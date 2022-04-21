import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CreateIcon from "@mui/icons-material/Create";
import FlipMove from "react-flip-move";
import "./addJobs.css";
import { Avatar } from "@mui/material";
import {
  addJobError,
  addJobLoading,
  addJobSuccess,
} from "../Redux/Jobs/actions.js";

export const AddJobs = () => {
  const [text, setText] = useState("");
  const [company,setCompany] = useState("");
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
    fetch("http://localhost:3004/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: text,
        company: company,
        city:city,
        image:img,
        date: new Date().toLocaleString(),
      },
      ),
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(addJobSuccess(res));
      })
      .catch((err) => {
        dispatch(addJobError(err));
      });
      setText("");
  };

  return (
    <div className="job">
      <div className="job_inputContainer">
        <div className="job_input">
          <form>
            <input
              value={text}
              type="text"
              placeholder="Job Title"
              onChange={(e) => setText(e.target.value)}
            />
            <input value={company} type="text" placeholder="Company Name" onChange={(e) => setCompany(e.target.value)} />
            <input value={city} type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
            <input type="url" placeholder="Add image"  value={img} onChange={(e) => setImg(e.target.value)}/>

            <button
              onClick={() => {
                addJob();
              }}
            >
              Add Job
            </button>
          </form>
          
        </div>
        
      </div>
    </div>
  );
};
