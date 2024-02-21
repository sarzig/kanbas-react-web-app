/* White bar that pops up on medium to large screen */
import { FaBars, FaAngleDown } from 'react-icons/fa';
import "./index.css";
import KanbasNavigation from "../Navigation";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import Dashboard from "../Dashboard";
import Courses from "../Courses";
import { courses } from "../Database";
import LocationLastElement from "../Functions/LocationLastElement";




function WhiteTopBar() {
    return (
        <div className="black-top-bar d-flex align-items-center flex-wrap d-md-none">

            <div className="col-2 icon-column d-flex justify-content-center align-items-center">
                <div className="top-bar-icon">
                    <FaBars />
                </div>
            </div>

            <div className="col-8 text-center d-flex flex-column justify-content-center">
                <div className="black-top-bar-text">
                    ahh
                </div>
                <div className="black-top-bar-text">
                    ahh
                </div>
            </div>

            <div className="col-2 icon-column d-flex justify-content-center align-items-center">
                ahh
            </div>
        </div>
    );
}

export default WhiteTopBar;
