/* White bar that pops up on medium to large screen */
import "./index.css";
import { useParams } from "react-router-dom";
import { courses } from "../../Kanbas/Database";
import LocationLastElement from "../Functions/LocationLastElement";
import { HiMiniBars3 } from "react-icons/hi2";
import { useState } from 'react';



function WhiteTopBar({ onToggleCourseNav }: { onToggleCourseNav: () => void }) {

    const { courseId } = useParams();

    const course = courses.find((course) => course._id === courseId);

    /* Get where we are. If we're at http://localhost:3000/#/Kanbas/Courses/RS101/Panopto-Video, this returns 
       Panopto Video */
    const lastSegment = LocationLastElement();

    /*Trying to handle the toggling of the Course Navigation Menu */

    const [isNavigationOpen, setNavigationOpen] = useState(true);

    /* Handle the toggle feature */
    const handleToggleNavigation = () => {
        setNavigationOpen((prev) => !prev);
    };

    /* Handle the hover text when clicking hamburger */
    const handleToggleTitle = () => { return isNavigationOpen ? "Hide Course Navigation Menu" : "Show Course Navigation Menu"; };

    return (
        <div className="white-top-bar d-flex align-items-center flex-wrap">

            <div className="col widescreen-top-bar">
                <h1>
                    <HiMiniBars3 className="top-bar-menu-hamburger" onClick={onToggleCourseNav} title={handleToggleTitle()} />
                    {course?.number ?? 'Unknown Course'}: {course?.name ?? 'Unknown Course'}  {`>`}  {lastSegment}
                    <hr />
                </h1>
            </div>
        </div>
    );
}

export default WhiteTopBar;
