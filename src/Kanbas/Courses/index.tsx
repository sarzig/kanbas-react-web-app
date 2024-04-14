
// React Elements
import { Navigate, Route, Routes } from "react-router-dom";

// Icons

// Screen Elements
import CourseNavigation from "./Navigation";
import WhiteTopBar from "../WhiteTopBar";

// Main Content elements
import Modules from "./Modules";
import Grades from "./Grades";
import Home from "./Home/";
import Assignments from "./Assignments";
import Editor from "./Assignments/Editor/";

//Styles
import "../styles.css";
import "./index.css";
import { useState } from "react";
//import axios from "axios";



function Courses() {
  const [showCourseNav, setShowCourseNav] = useState(true);

  const toggleCourseNav = () => {
    setShowCourseNav(!showCourseNav);
  };

  /*
const COURSES_API = "https://kanbas-node-server-app-96jf.onrender.com/api/courses";
const [course, setCourse] = useState<any>({ _id: "" });
const findCourseById = async (courseId?: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}`
  );
  setCourse(response.data);
};
*/


  return (
    <>
      <div className="main-content">

        <div className="row flex">
          <WhiteTopBar onToggleCourseNav={toggleCourseNav} />
        </div>

        <div className="flex-grow-1">
          <div className="row">
            {showCourseNav && <CourseNavigation />}
            <div className="col">

              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h2>Piazza</h2>} />
                <Route path="Grades" element={<Grades />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/Editor/:assignmentId" element={<Editor />} />
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
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses;