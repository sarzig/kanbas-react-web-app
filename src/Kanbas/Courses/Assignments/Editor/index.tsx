import { ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import GetAssignment from "../../../Functions/GetAssignment";
import CourseIdExtract from "../../../Functions/CourseIdExtract";

function AssignmentEditor() {
    const assignment = GetAssignment();
    const courseId = CourseIdExtract();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Handle input changes here
        // For example: setAssignmentTitle(event.target.value);
    };

    return (
        <div>
            Assignment Name
            <input
                value={assignment?.title || ""}
                onChange={handleInputChange}
                className="form-control mb-2"
            />

            <div className="container mt-4">
                <div className="row">
                    {/* Left Column for Labels */}
                    <div className="col-md-5 align-top float-end">
                        <label htmlFor="points" className="mt-2">Points</label><br />
                        <label htmlFor="assignmentGroup" className="mt-2">Assignment Group</label><br />
                        <label htmlFor="displayGradeAs" className="mt-2">Display Grade as</label><br />
                        <label htmlFor="submissionType" className="mt-2">Submission Type</label><br />
                        <label htmlFor="assign" className="mt-2">Assign</label><br />
                        <label htmlFor="due" className="mt-2">Due</label><br />
                        <label htmlFor="availableFrom" className="mt-2">Available from</label><br />
                        <label htmlFor="until" className="mt-2">Until</label><br />
                    </div>

                    {/* Right Column for Form Fields */}
                    <div className="col-md-5">
                        <input type="text" className="form-control mb-2" id="points" placeholder="Enter Points" />
                        <input type="text" className="form-control mb-2" id="assignmentGroup" placeholder="Enter Assignment Group" />
                        <input type="text" className="form-control mb-2" id="displayGradeAs" placeholder="Enter Display Grade as" />
                        <select className="form-control mb-2" id="submissionType">
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                        <input type="text" className="form-control mb-2" id="assign" placeholder="Enter Assign" />
                        <input type="text" className="form-control mb-2" id="due" placeholder="Enter Due Date" />
                        <input type="text" className="form-control mb-2" id="availableFrom" placeholder="Enter Available from Date" />
                        <input type="text" className="form-control mb-2" id="until" placeholder="Enter Until Date" />


                        <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                            Save
                        </button>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger float-end">
                            Cancel
                        </Link>
                    </div>

                    <div className="col col-2">
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AssignmentEditor;
