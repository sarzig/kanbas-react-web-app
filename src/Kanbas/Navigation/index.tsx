import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FaRegUserCircle, FaBook, FaRegCalendarAlt, FaTachometerAlt } from "react-icons/fa";
import { FaInbox, FaRegClock, FaPlay, FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function KanbasNavigation() {
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
                        <Link to={`/Kanbas/${link.label}`}> {link.icon}<br />{link.label} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default KanbasNavigation;
