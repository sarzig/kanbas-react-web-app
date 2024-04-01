
// React Elements
import { Navigate, Route, Routes, useParams } from "react-router-dom";

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


// Functions

// Data

//Styles
import "../styles.css";
import "./index.css";


/* todo: xxx implement routes as a loop */

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
}


function Courses(
  { courses }: { courses: any[] }
) {
  /*

    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[],
    course: any,
    setCourse: React.Dispatch<React.SetStateAction<any>>,
    addNewCourse: () => void,
    deleteCourse: (id: string) => void,
    updateCourse: () => void
  }

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

  // these lines are ruining deploy netlify
  //const { courseId } = useParams();
  //const course = courses.find((course) => course._id === courseId);

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