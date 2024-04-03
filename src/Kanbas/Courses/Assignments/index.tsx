import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../../Kanbas/Database";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RxDotsVertical } from "react-icons/rx";
import "../../styles.css";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
    return (
        <>

            <div className="row button-row">
                <div className="col-5">
                    <input className="form-control red-search" type="text"
                        placeholder="Search for Assignment" />
                </div>

                <div className="col-7">
                    <div className="d-flex float-end">
                        <button className="btn button-topbar-medium">
                            <GoPlus className="icon" />
                            Group</button>

                        <button className="btn button-topbar-medium red-button">
                            <GoPlus className="icon" />
                            Assignment</button>

                        <button className="btn button-topbar-medium mini-button">
                            <RxDotsVertical className="icon" />
                        </button>
                    </div>
                </div>
            </div>

            <ul className="list-group kanbas-modules">
                <li className="list-group-item">
                    <div className="kanbas-modules-title">

                        <PiDotsSixVerticalBold className="modules-icon" />
                        <IoMdArrowDropdown className="modules-icon" />

                        Assignments

                        <span className="float-end">
                            <GoPlus className="modules-icon" />
                            <RxDotsVertical className="modules-icon" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">

                                <div className="row">
                                    <div className="col col-2 mini-col text-center d-flex flex-column align-items-center justify-content-center">
                                        <div className="d-flex align-items-center">
                                            <PiDotsSixVerticalBold className="modules-icon" />
                                            <FaTrash className="modules-icon icon-red" />
                                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor/${assignment._id}`}>
                                                <FaRegPenToSquare className="modules-icon icon-green" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="assignment-name">
                                            <Link
                                                to={`/Kanbas/Courses/${courseId}/Assignments/Editor/${assignment._id}`}>{assignment.title}</Link>
                                        </div>

                                        <div className="byline">
                                            <Link to={`#`}>Multiple Modules</Link>&nbsp;&nbsp;&nbsp;|
                                            &nbsp;&nbsp;&nbsp;Due {assignment.due_date}&nbsp;&nbsp;&nbsp;|
                                            &nbsp;&nbsp;&nbsp;{assignment.points} pts
                                        </div>
                                    </div>


                                    <div className="col col-2 mini-col text-center d-flex flex-column align-items-center justify-content-center">
                                        <div className="d-flex">
                                            <FaCheckCircle className="modules-icon icon-green" />
                                            <PiDotsSixVerticalBold className="modules-icon" />
                                        </div>
                                    </div>
                                </div>

                            </li>))}
                    </ul>
                </li >
            </ul >
        </>
    );
}
export default Assignments;
