// xxx need to change so that this takes argument userRole
// xxx need to add horizontal line under buttons
// need to fix up to do, coming up, and view calendar
import { Link } from "react-router-dom";

import { RiProhibitedLine } from "react-icons/ri";
import { LiaFileImportSolid } from "react-icons/lia";
import { GrCloudUpload } from "react-icons/gr";
import { PiCrosshairLight } from "react-icons/pi";
import { IoBarChartSharp } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { BsCalendar2Day } from "react-icons/bs";

function HomeSideBar() {

    // hard code userRole: faculty for now
    const myUserRole = "student";


    // "Database" that drives button creation
    const buttons =
        [
            {
                "icon": LiaFileImportSolid,
                "iconClassName": "sidebar-icon",
                "buttonContent": "Import Existing Content",
                "link": "google.com",
                "userRole": ["faculty"]
            },
            {
                "icon": GrCloudUpload,
                "iconClassName": "sidebar-icon",
                "buttonContent": "Import From Commons",
                "link": "google.com",
                "userRole": ["faculty"]
            },
            {
                "icon": PiCrosshairLight,
                "iconClassName": "sidebar-icon",
                "buttonContent": "Choose Home Page",
                "link": "google.com",
                "userRole": ["faculty"]
            },
            {
                "icon": IoBarChartSharp,
                "iconClassName": "sidebar-icon",
                "buttonContent": "View Course Stream",
                "link": "google.com",
                "userRole": ["faculty", "student"]
            },
            {
                "icon": CiBullhorn,
                "iconClassName": "sidebar-icon",
                "buttonContent": "New Announcement",
                "link": "google.com",
                "userRole": ["faculty"]
            },
            {
                "icon": IoBarChartSharp,
                "iconClassName": "sidebar-icon",
                "buttonContent": "New Analytics",
                "link": "google.com",
                "userRole": ["faculty", "student"]
            },
            {
                "icon": BsCalendar2Day,
                "iconClassName": "sidebar-icon",
                "buttonContent": "View Course Calendar",
                "link": "google.com",
                "userRole": ["faculty", "student"]
            },
            {
                "icon": FaRegBell,
                "iconClassName": "sidebar-icon",
                "buttonContent": "View Course Notifications",
                "link": "google.com",
                "userRole": ["faculty", "student"]
            },
        ]

    return (
        <>
            <p><strong>Course Status</strong></p>
            <div className="d-flex">
                <button className="btn btn button-sidebar-wide">
                    <i className="fa fa-ban"></i>
                    Unpublish
                </button>
                <button className="btn button-sidebar-wide green-button" style={{ marginLeft: '5px' }}>
                    <i
                        className="fa fa-check-circle"></i> Published</button>
            </div>

            <div className="d-flex flex-column">

                {buttons
                .filter((button) => button.userRole.includes(myUserRole))
                .map((button, index) => (

                    <Link key={index} className="btn btn-link button-sidebar-wide" to={button.link}>

                        <div className={button.iconClassName}>
                            <button.icon />
                        </div>

                        {button.buttonContent}

                    </Link>

                ))}

            </div>

            <br />

            <p><strong>To Do</strong></p>
            <hr />
            <p>Grade A1 - ENV + HTML</p>

            <br />

            <p><strong>Coming Up</strong></p>
            <hr />
            <p>
                <BsCalendar2Day /> View Calendar</p>
            <hr />

        </>
    );
};
export default HomeSideBar;