import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import BlackTopBar from "./BlackTopBar/";
import "./styles.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import CoursesMenu from './Navigation/CoursesMenu';
import axios from "axios";

function Kanbas() {
  //for local
  //const COURSES_API = "http://localhost:4001/api/courses";

  // for web deployment:
  const COURSES_API = "https://kanbas-node-server-app-96jf.onrender.com/api/courses";


  // Handling courses menu____________________________________________
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);

  const hideCoursePopupMenu = () => {
    setShowCoursesMenu(false);
  };

  const toggleCoursesMenu = () => {
    setShowCoursesMenu(prevState => !prevState);
  };
  // End handling courses menu

  // Handing courses___________________________________________________
  // Initializing default values for courses and course
  const [courses, setCourses] = useState<any[]>([]);

  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/default_no_image_loaded.jpg"
  });

  const addNewCourse = async () => {
    console.log('course', course)
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, response.data]);
  };


  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(
      `${COURSES_API}/${courseId}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };


  const updateCourse = async () => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };

  
  // End handling courses______________________________________________


  return (
    <Provider store={store}>
      <div className="row flex">
        <BlackTopBar />
      </div>

      <div className="d-flex">
        <KanbasNavigation
          courses={courses}
          toggleCoursesMenu={toggleCoursesMenu}
        />
        {showCoursesMenu && (
          <CoursesMenu courses={courses} hideCoursePopupMenu={hideCoursePopupMenu} />
        )}
        <div className="flex-grow-1 p-2">

          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;