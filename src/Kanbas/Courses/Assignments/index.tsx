import { useState } from "react"; // Import useState
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    deleteAssignment
} from "./assignmentsReducer";
import { KanbasState } from "../../store"; // Import the KanbasState type
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RxDotsVertical } from "react-icons/rx";
import "../../styles.css";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();

    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments
    );

    const dispatch = useDispatch();

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedAssignmentId, setSelectedAssignmentId] = useState<string | null>(null);

    const handleDeleteClick = (assignmentId: string) => {
        // Set the selected assignment ID and show the delete confirmation dialog
        setSelectedAssignmentId(assignmentId);
        setShowDeleteDialog(true);
    };

    const handleConfirmDelete = () => {
        dispatch(deleteAssignment(selectedAssignmentId));
        setShowDeleteDialog(false);
    };

    const handleCancelDelete = () => {
        // Hide the delete confirmation dialog
        setShowDeleteDialog(false);
    };

    console.log(assignmentList);

    return (
        <>
            {/* Confirmation dialog */}
            {showDeleteDialog && (
                <div>
                    <h2>Delete Assignment</h2>
                    <p>Are you sure you want to delete this assignment?</p>
                    <div className="modal-buttons">
                        <button onClick={handleConfirmDelete} className="button-topbar-medium red-button">Yes</button>
                        <button onClick={handleCancelDelete} className="button-topbar-medium">No</button>
                    </div>
                </div>

            )}

            <div className="row button-row">
                <div className="col-5">
                    <input className="form-control red-search" type="text"
                        placeholder="Search for Assignment" />
                </div>

                <div className="col-7">
                    <div className="d-flex float-end">
                        <button className="btn button-topbar-medium">
                            <GoPlus className="icon" />
                            Group
                        </button>


                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor/addNewAssignment`}>
                            <button
                                className="btn button-topbar-medium red-button">

                                Assignment

                            </button>
                        </Link>


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
                        {assignmentList
                            .filter((assignment) => assignment.course === courseId)
                            .map((assignment, index) => (
                                <li key={index} className="list-group-item">

                                    <div className="row">
                                        <div className="col col-2 mini-col text-center d-flex flex-column align-items-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <PiDotsSixVerticalBold className="modules-icon" />

                                                <button
                                                    className="modules-icon icon-red delete-button"
                                                    onClick={() => handleDeleteClick(assignment._id)}                                                >
                                                    <FaTrash className="modules-icon icon-red delete-button" />
                                                </button>

                                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor/${assignment._id}`}>
                                                    <FaRegPenToSquare className="modules-icon icon-green" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="assignment-name">
                                                <Link
                                                    to={`/Kanbas/Courses/${courseId}/Assignments/Editor/${assignment._id}`}>
                                                    {assignment.title}
                                                </Link>
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
