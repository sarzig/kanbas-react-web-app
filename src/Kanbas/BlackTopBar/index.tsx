/* Black bar that pops up on small screen */
import { FaBars, FaAngleDown } from 'react-icons/fa';
import "./index.css";
import KanbasNavigation from "../Navigation";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import Dashboard from "../Dashboard";
import Courses from "../Courses";
import { courses } from "../Database";
import LocationLastElement from "../Functions/LocationLastElement";
import CourseIdExtract from '../Functions/CourseIdExtract';


interface TopBarProps {
    lineOne: string;
    lineTwo: string;
}

function BlackTopBar() {


    // Get the path of where we are
    const location = useLocation();
    console.log(`location is ${location.pathname}`);


    // Extract the final segment of the path (for http://localhost:3000/#/Kanbas/Dashboard it returns Dashboard)
    const lastSegment = LocationLastElement();
    console.log(`lastSegment is ${lastSegment}`);


    // If params are being used, capture them
    const courseId = CourseIdExtract();

    console.log(`courseId is ${courseId}`);

    let lineOneResult;
    let lineTwoResult;

    // If we're in "Kanbas/Courses" screen, then base the top bar text on the course. 
    // Otherwise, base the top bar text on where we are in Canvas.
    if (courseId === "") {
        lineOneResult = lastSegment;
        lineTwoResult = "";
    } else {
        const course = courses.find((course) => course._id === courseId);
        console.log(`course is ${course}`);

        lineOneResult = `${course?.number ?? 'Unknown Course'}: ${course?.name ?? 'Unknown Course'}`;
        lineTwoResult = lastSegment;
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
