/* White bar that pops up on medium to large screen */
import { FaBars, FaAngleDown } from 'react-icons/fa';
import "./index.css";
import KanbasNavigation from "../Navigation";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import Dashboard from "../Dashboard";
import Courses from "../Courses";
import { courses } from "../Database";
import LocationLastElement from "../Functions/LocationLastElement";
import { HiMiniBars3 } from "react-icons/hi2";
import React, { useState } from 'react';



function WhiteTopBar() {

    const { courseId } = useParams();
    console.log(`courseId is ${courseId}`);
    const course = courses.find((course) => course._id === courseId);
    console.log(`course is ${course}`);


    const [isNavigationOpen, setNavigationOpen] = useState(true);

    /* Handle the toggle feature */
    const handleToggleNavigation = () => {
        setNavigationOpen((prev) => !prev);
    };

    /* Handle the hover text when clicking hamburger */
    const handleToggleTitle = () => { return isNavigationOpen ? "Hide Account Navigation Menu" : "Show Account Navigation Menu"; };

    /* Get where we are. If we're at http://localhost:3000/#/Kanbas/Courses/RS101/Panopto-Video, this returns 
       Panopto Video */
    const lastSegment = LocationLastElement();

    return (
        <div className="white-top-bar d-flex align-items-center flex-wrap">

            <div className="col-9 widescreen-top-bar">
                <h1>
                    <HiMiniBars3 className="top-bar-menu-hamburger" onClick={handleToggleNavigation} title={handleToggleTitle()} />
                    {course?.number ?? 'Unknown Course'}: {course?.name ?? 'Unknown Course'}  {`>`}  {lastSegment}
                    <hr />
                </h1>
            </div>

            <div className="col-3 icon-column d-flex justify-content-center align-items-center">
                ahh
            </div>
        </div>
    );
}

export default WhiteTopBar;
