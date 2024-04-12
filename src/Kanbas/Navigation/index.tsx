import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle, FaBook, FaRegCalendarAlt, FaTachometerAlt } from "react-icons/fa";
import { FaInbox, FaRegClock, FaPlay, FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

interface Course {
    _id: string;
    name: string;
    number: string;
}

interface Props {
    courses: Course[];
    toggleCoursesMenu: () => void; // Define toggleCoursesMenu function in Props
}

function KanbasNavigation({ courses }: Props) {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2 nav-icon" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 nav-icon" /> },
        { label: "Courses", icon: <FaBook className="fs-2 nav-icon" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 nav-icon" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2 nav-icon" /> },
        { label: "History", icon: <FaRegClock className="fs-2 nav-icon" /> },
        { label: "Studio", icon: <FaPlay className="fs-2 nav-icon" /> },
        { label: "Commons", icon: <FaRegUserCircle className="fs-2 nav-icon" /> },
        { label: "Help", icon: <FaRegCircleQuestion className="fs-2 nav-icon" /> },
        { label: "Messages", icon: <IoMdMail className="fs-2 nav-icon" /> },
    ];

    const { pathname } = useLocation();
    const [showCoursesMenu, setShowCoursesMenu] = useState(false);

    const handleCoursesClick = () => {
        setShowCoursesMenu(!showCoursesMenu);
    };

    return (
        <div className="col main-nav-sidebar">
            <ul className="wd-kanbas-navigation">
                <li className="">
                    <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">
                        <div className="custom-northeastern-icon" />
                    </a>
                </li>
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                        {/* If the label is "Courses", toggle the CoursesMenu visibility */}
                        {link.label === "Courses" ? (
                            <button onClick={handleCoursesClick} className="nav-link-button">
                                {link.icon}
                                <br />
                                {link.label}
                            </button>
                        ) : (
                            <Link to={`/Kanbas/${link.label}`} className="nav-link">
                                {link.icon}
                                <br />
                                {link.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default KanbasNavigation;
