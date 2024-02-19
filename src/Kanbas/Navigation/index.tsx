import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FaRegUserCircle, FaBook, FaRegCalendarAlt, FaTachometerAlt } from "react-icons/fa";
import { FaInbox, FaRegClock, FaPlay, FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" /> },
        { label: "History", icon: <FaRegClock className="fs-2" /> },
        { label: "Studio", icon: <FaPlay className="fs-2" /> },
        { label: "Commons", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Help", icon: <FaRegCircleQuestion className="fs-2" /> },
        { label: "Messages", icon: <IoMdMail className="fs-2" /> },
    ];

    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li className="">
                <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">
                    <div className="custom-northeastern-icon" />
                </a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon}<br />{link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;
