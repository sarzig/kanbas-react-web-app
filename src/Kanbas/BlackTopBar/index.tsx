/* Black bar that pops up on small screen */
import { FaBars, FaAngleDown } from 'react-icons/fa';
import "./index.css";
import KanbasNavigation from "../Navigation";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import Dashboard from "../Dashboard";
import Courses from "../Courses";
import { courses } from "../Database";
import LocationLastElement from "../Functions/LocationLastElement";


interface TopBarProps {
    lineOne: string;
    lineTwo: string;
}

function BlackTopBar() {


    // Get the path of where we are
    const location = useLocation();

    // Extract the final segment of the path (for http://localhost:3000/#/Kanbas/Dashboard it returns Dashboard)
    const lastSegment = LocationLastElement();

    // If params are being used, capture them
    const { courseId } = useParams();

    let lineOneResult;
    let lineTwoResult;

    // If we're in "Kanbas/Courses" screen, then base the top bar text on the course. 
    // Otherwise, base the top bar text on where we are in Canvas.
    if (location.pathname.includes("Kanbas/Courses")) {
        const course = courses.find((course) => course._id === courseId);

        lineOneResult = `${course?.number ?? 'Unknown Course'}: ${course?.name ?? 'Unknown Course'}`;
        lineTwoResult = lastSegment;

    } else {
        lineOneResult = lastSegment;
        lineTwoResult = "";
    }

    // Conditionally render the down arrow icon
    const downArrow = location.pathname.includes("Kanbas/Courses") && (
        <div className="top-bar-icon">
            <FaAngleDown />
        </div>
    );

    return (
        <div className="black-top-bar d-flex align-items-center flex-wrap d-md-none">

            <div className="col-2 icon-column d-flex justify-content-center align-items-center">
                <div className="top-bar-icon">
                    <FaBars />
                </div>
            </div>

            <div className="col-8 text-center d-flex flex-column justify-content-center">
                <div className="black-top-bar-text">
                    {lineOneResult}
                </div>
                <div className="black-top-bar-text">
                    {lineTwoResult}
                </div>
            </div>

            <div className="col-2 icon-column d-flex justify-content-center align-items-center">
                {downArrow}
            </div>
        </div>
    );
}

export default BlackTopBar;
