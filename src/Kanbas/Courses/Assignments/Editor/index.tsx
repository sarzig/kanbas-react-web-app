import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import GetAssignment from "../../../Functions/GetAssignment";
import CourseIdExtract from "../../../Functions/CourseIdExtract";

import { RxDotsVertical } from "react-icons/rx";


function AssignmentEditor() {
    const assignment = GetAssignment();

    const courseId = CourseIdExtract();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div>
            Assignment Name
            <input value={assignment?.title}
                className="form-control mb-2" />
                
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end">
                Cancel
            </Link>
        </div>
    );
}
export default AssignmentEditor;
