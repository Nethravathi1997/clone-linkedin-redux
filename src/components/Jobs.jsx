import React from "react";
import AddJobs from "./AddJobs";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";
import "./addJobs.css";
import CreateIcon from "@mui/icons-material/Create";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SubjectIcon from '@mui/icons-material/Subject';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  getJobError,
  getJobLoading,
  getJobSuccess,
} from "../Redux/Jobs/actions.js";
import "./jobs.css";

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
    <div
      style={{
        display: "flex",
      }}
    >
      <div className="l1">
          <div >
              <div>
              <BookmarkIcon />
              <h3>My Jobs</h3>
              </div>
              <div>
              <NotificationsIcon />
              <h3>Job Alerts</h3>
              </div>
              <div>
                  <LocalAtmIcon/>
                  <h3>Salary</h3>
              </div>
              <div>
                <AssignmentTurnedInIcon/>
                <h3>Skill Assessments</h3>
              </div>
              <div>
                <SummarizeIcon/>
                <h3>Interview Prep</h3>
              </div>
              <div>
                    <SubjectIcon/>
                    <h3>Resume Builder</h3>
              </div>
              <div>
                  <OndemandVideoIcon/>
              <h3>Job seeker Guidance</h3>
              </div>
              <div>
                  <SettingsIcon/>
              <h3>Application settings</h3>
              </div>
          </div>
        <Link to="/addjobs">
          <button>Post Job</button>
        </Link>
      </div>
      <div
        style={{
          marginLeft: "20px",
        }}
      >
        <FlipMove>
          {jobs
            .sort((a, b) => {
              return b.city - a.city;
              console.log(b.city - a.city);
            })
            .map(({ date, title, company, city, image }, index) => (
              <div className="jobbox" key={index}>
                <div className="Job">
                  <div className="Job_header">
                    <div className="img">
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "50%",
                        }}
                        src={image}
                      />
                    </div>
                    <div className="cminfo">
                      <div className="Job_body">{title}</div>
                      <p>{company}</p>
                      <p>{city}</p>
                      <p>Posted At: {date}</p>
                    </div>
                  </div>
                  <div className="hire">
                    <div
                      style={{
                        color: "green",
                      }}
                    >
                      <ConnectWithoutContactIcon />
                    </div>
                    <p> Actively Hiring </p>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                      alt=""
                    />
                    <p>Easy Apply</p>

                    <div
                      className="book"
                      style={{
                        color: "red",
                      }}
                    >
                      <BookmarkBorderIcon />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </FlipMove>
      </div>
      <div className="right" style={{
          marginTop: "5px",
      }}>
        <div
          className="top"
          style={{
            padding: "10px",
          }}
        >
          <h2
            style={{
              fontWeight: "400",
              textAlign: "left",
              fontSize: "25px",
              marginTop: "-5px",
            }}
          >
            Job update
          </h2>
          <img
            style={{
              height: "50px",
              width: "100%",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
            src="https://media-exp1.licdn.com/dms/image/C4D1BAQEZ68W2u6mHZA/company-background_400/0/1619453705861?e=2147483647&v=beta&t=oZDVD6g2dl7oMLVdyWYi0B6cUDrDD-DVgtDBdd_wXsA"
            alt=""
          />
          <h3
            style={{
              fontWeight: "400",
              fontSize: "18px",
              textAlign: "left",
            }}
          >
            Intern/Junior Frontend Developer <br />
            (Remote Frontend Development) <br />
            Internship
          </h3>
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              style={{
                height: "50px",
                width: "50px",
              }}
              src="https://static.wixstatic.com/media/4fa9c2_0b28731f38304ed0989a8c0582f953a3~mv2.png/v1/fill/w_2500,h_2500,al_c/4fa9c2_0b28731f38304ed0989a8c0582f953a3~mv2.png"
              alt=""
            />
            <div
              style={{
                textAlign: "left",
                lineHeight: "10px",
                marginLeft: "20px",
                marginTop: "-10px",
                color: "gray",
                fontSize: "14px",
              }}
            >
              <p>Brainnest</p>
              <p>Mumbai (On-site)</p>
            </div>
          </div>
          <p
            style={{
              fontSize: "15px",
              marginLeft: "-60px",
              marginTop: "-3px",
            }}
          >
            Posted 4days ago
          </p>
          <p
            style={{
              fontSize: "15px",
              marginLeft: "-60px",
              marginTop: "-10px",
              color: "rgb(102,102,102)",
            }}
          >
            <BookmarkIcon /> saved less than a day ago
          </p>
          <button
            style={{
              height: "40px",
              borderRadius: "20px",
              width: "300px",
              backgroundColor: "rgb(10,102,194)",
              color: "white",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Apply <ExternalLinkIcon />
          </button>
        </div>
        <div className="bottom">
          <h2>Job seeker guidance</h2>
          <p>Recommended based on your activity</p>
          <hr />
          <p>
            Explore our curated guide of expert-led courses, such as how to
            improve your resume and grow your network, to help you land your
            next opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
