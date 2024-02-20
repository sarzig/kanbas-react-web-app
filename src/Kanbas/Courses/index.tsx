import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import React, { useState } from 'react';
import "../styles.css";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const [isNavigationOpen, setNavigationOpen] = useState(false);

  /* Handle the toggle feature */
  const handleToggleNavigation = () => {
    setNavigationOpen((prev) => !prev);
  };

  /* Handle the hover text when clicking hamburger */
  const handleToggleTitle = () => {return isNavigationOpen ? "Hide Account Navigation Menu" : "Show Account Navigation Menu";};

  return (
    <div className="main-content">
      <h1>
        <HiMiniBars3 className="top-bar-menu-hamburger" onClick={handleToggleNavigation} title={handleToggleTitle()} />
        Course {course?.name ?? 'Unknown Course'}
      </h1>
      <hr />

      {isNavigationOpen && <CourseNavigation />}

      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<h1>Modules</h1>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Courses;