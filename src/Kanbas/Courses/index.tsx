import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import React, { useState } from 'react';
import "../styles.css";
import "./index.css";
import Modules from "./Modules";
import {Link, useLocation} from "react-router-dom";

/* todo: xxx implement routes as a loop */

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const [isNavigationOpen, setNavigationOpen] = useState(true);

  /* Handle the toggle feature */
  const handleToggleNavigation = () => {
    setNavigationOpen((prev) => !prev);
  };

  /* Handle the hover text when clicking hamburger */
  const handleToggleTitle = () => { return isNavigationOpen ? "Hide Account Navigation Menu" : "Show Account Navigation Menu"; };

  return (
    <div className="main-content">
      <h1>
        <HiMiniBars3 className="top-bar-menu-hamburger" onClick={handleToggleNavigation} title={handleToggleTitle()} />
        Course {course?.name ?? 'Unknown Course'}

        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<>{'  > '}Home</>} />
          <Route path="Modules" element={<Link to="Modules">{'  > '}Modules</Link>} />
          <Route path="Piazza" element={<>{'  > '}Piazza</>} />
          <Route path="Grades" element={<>{'  > '}Grades</>} />
          <Route path="Assignments" element={<>{'  > '}Assignments</>} />
          <Route path="Assignments/:assignmentId" element={<>{'  > '}Assignment Editor</>} />
          <Route path="Quizzes" element={<>{'  > '}Quizzes</>} />
          <Route path="Zoom-Meetings" element={<>{'  > '}Zoom Meetings</>} />
          <Route path="People" element={<>{'  > '}People</>} />
          <Route path="Panopto-Video" element={<>{'  > '}Panopto Video</>} />
          <Route path="Discussions" element={<>{'  > '}Discussions</>} />
          <Route path="Announcements" element={<>{'  > '}Announcements</>} />
          <Route path="Pages" element={<>{'  > '}Pages</>} />
          <Route path="Files" element={<>{'  > '}Files</>} />
          <Route path="Rubrics" element={<>{'  > '}Rubrics</>} />
          <Route path="Outcomes" element={<>{'  > '}Outcomes</>} />
          <Route path="Collaborations" element={<>{'  > '}Collaborations</>} />
          <Route path="Syllabus" element={<>{'  > '}Syllabus</>} />
          <Route path="Settings" element={<>{'  > '}Settings</>} />
          <Route path="Modules" element={<Modules />} />
        </Routes>
        
      </h1>
      <hr />

      {isNavigationOpen && <CourseNavigation />}

    </div>
  );
};
export default Courses;