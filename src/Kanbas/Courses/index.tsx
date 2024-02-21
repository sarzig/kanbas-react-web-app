import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import React, { useState } from 'react';
import "../styles.css";
import "./index.css";
import Modules from "./Modules";
import { Link, useLocation } from "react-router-dom";
import BlackTopBar from "../BlackTopBar/";
import LocationLastElement from "../Functions/LocationLastElement";
import WhiteTopBar from "../WhiteTopBar";

/* todo: xxx implement routes as a loop */

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  /* Get where we are. If we're at http://localhost:3000/#/Kanbas/Courses/RS101/Panopto-Video, this returns 
     Panopto Video */
  const lastSegment = LocationLastElement();


  const [isNavigationOpen, setNavigationOpen] = useState(true);

   //Handle the toggle feature 
  const handleToggleNavigation = () => {
    setNavigationOpen((prev) => !prev);
  };

   //Handle the hover text when clicking hamburger 
  const handleToggleTitle = () => { return isNavigationOpen ? "Hide Account Navigation Menu" : "Show Account Navigation Menu"; };


  return (
    <>
      <div className="main-content">

        <div className="row flex">
          <WhiteTopBar />
        </div>

        <div className="container">
          <div className="row">
            {isNavigationOpen && <CourseNavigation />}

            <div className="col">

              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<h2>Home</h2>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h2>Piazza</h2>} />
                <Route path="Grades" element={<h2>Grades</h2>} />
                <Route path="Assignments" element={<h2>Assignments</h2>} />
                <Route path="Assignments/:assignmentId" element={<h2>Assignment Editor</h2>} />
                <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                <Route path="Zoom-Meetings" element={<h2>Zoom Meetings</h2>} />
                <Route path="People" element={<h2>People</h2>} />
                <Route path="Panopto-Video" element={<h2>Panopto Video</h2>} />
                <Route path="Discussions" element={<h2>Discussions</h2>} />
                <Route path="Announcements" element={<h2>Announcements</h2>} />
                <Route path="Pages" element={<h2>Pages</h2>} />
                <Route path="Files" element={<h2>Files</h2>} />
                <Route path="Rubrics" element={<h2>Rubrics</h2>} />
                <Route path="Outcomes" element={<h2>Outcomes</h2>} />
                <Route path="Collaborations" element={<h2>Collaborations</h2>} />
                <Route path="Syllabus" element={<h2>Syllabus</h2>} />
                <Route path="Settings" element={<h2>Settings</h2>} />
                <Route path="Modules" element={<Modules />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default Courses;