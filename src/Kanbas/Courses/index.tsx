
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

// Functions

// Data

//Styles
import "../styles.css";
import "./index.css";


/* todo: xxx implement routes as a loop */

function Courses() {
  /*
  const { courseId } = useParams();

  const course = courses.find((course) => course._id === courseId);
  //Get where we are. If we're at http://localhost:3000/#/Kanbas/Courses/RS101/Panopto-Video, this returns 
  // Panopto Video
  const lastSegment = LocationLastElement();


  const [isNavigationOpen, setNavigationOpen] = useState(true);

  //Handle the toggle feature 
  const handleToggleNavigation = () => {
    setNavigationOpen((prev) => !prev);
  };

  //Handle the hover text when clicking hamburger 
  const handleToggleTitle = () => { return isNavigationOpen ? "Hide Account Navigation Menu" : "Show Account Navigation Menu"; };

  const [isNavigationOpen, setNavigationOpen] = useState(true);
*/

  return (
    <>
      <div className="main-content">

        <div className="row flex">
          <WhiteTopBar />
        </div>

        <div className="flex-grow-1">
          <div className="row">
            <CourseNavigation />

            <div className="col">

              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h2>Piazza</h2>} />
                <Route path="Grades" element={<Grades />} />
                <Route path="Assignments" element={<Assignments />} />
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
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Courses;