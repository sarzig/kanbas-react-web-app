import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes", "Zoom-Meetings", "People", "Panopto-Video", "Discussions",
    "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { pathname } = useLocation();


  return (
    <div className="col course-nav-sidebar">
      <ul className="wd-navigation">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.replace(/\s/g, "")) ? "wd-active" : ""}>
            <Link to={link}>{link.replace("-", " ")}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseNavigation;
