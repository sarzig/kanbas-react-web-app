/* White bar that pops up on medium to large screen */
import "./index.css";
import LocationLastElement from "../Functions/LocationLastElement";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseIdExtract from "../Functions/CourseIdExtract";


function WhiteTopBar({
    courses,
    onToggleCourseNav,
}: {
    courses: any[];
    onToggleCourseNav: () => void;
}) {


    const courseId = CourseIdExtract();
    const course = courses.find((course) => course._id === courseId);

    /* Get where we are. If we're at http://localhost:3000/#/Kanbas/Courses/RS101/Panopto-Video, this returns 
         Panopto Video */
    const lastSegment = LocationLastElement();

    return (
        <div className="white-top-bar d-flex align-items-center flex-wrap">

            <div className="col widescreen-top-bar">
                <h1>
                    <HiMiniBars3 className="top-bar-menu-hamburger" onClick={onToggleCourseNav} title="Toggle Course Navigation Menu" />
                    {course?.number ?? 'Unknown Course'}: {course?.name ?? 'Unknown Course'}  {`>`}  {lastSegment}
                    <hr />
                </h1>
            </div>
        </div>
    );
}

export default WhiteTopBar;
