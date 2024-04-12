import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignment, addAssignment, updateAssignment } from "../assignmentsReducer";
import { KanbasState } from "../../../store";
import CourseIdExtract from "../../../Functions/CourseIdExtract";

function AssignmentEditor() {
    const courseId = CourseIdExtract();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignmentId = useParams().assignmentId;

    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment
    );

    // Pull assignments list from the useSelector KanbasState
    // Previously deprecated function GetAssignmentById was pulling from the json, which meant assignment 
    // was not updating.
    const assignments = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);

    useEffect(() => {
        if (assignmentId !== undefined && assignmentId !== 'addNewAssignment') {
            //const assignment = GetAssignmentById(assignmentId);
            const assignment = assignments.find((assignment) => assignment._id === assignmentId);
            if (assignment) {
                dispatch(setAssignment(assignment));
                console.log(assignment);
            } else {
                // Handle case where assignment is not found
            }
        } else {
            // If it's a new assignment, initialize with default values
            const newAssignment = {
                title: "New Assignment",
                description: "New Description",
                points: 100,
                due_date: "2024-01-01",
                available_from: "2024-01-01",
                until: "2024-01-01"
            };
            dispatch(setAssignment(newAssignment));
        }
    }, [assignmentId, dispatch]);

    const goBackToAssignments = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const handleSave = () => {
        if (assignmentId === 'addNewAssignment') {
            dispatch(addAssignment({ ...assignment, course: courseId }));
        } else {
            dispatch(updateAssignment(assignment));
            console.log("Redux State after update:", assignment);
        }
        console.log("Logging assignment after handleSave:");
        console.log(assignment);
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const handleInputChange = (field: any, value: any) => {
        dispatch(setAssignment({ ...assignment, [field]: value }));
    };

    return (
        <div>
            Assignment Name
            <input
                value={assignment.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="form-control mb-2"
            />

            Assignment Description
            <input
                value={assignment.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="form-control mb-2"
            />

            <div className="container mt-4">
                <div className="row">
                    {/* Left Column for Labels */}
                    <div className="col-md-5 align-top float-end">
                        <label htmlFor="points" className="mt-2">Points</label><br />
                        <label htmlFor="assignmentGroup" className="mt-3">Assignment Group</label><br />
                        <label htmlFor="displayGradeAs" className="mt-3">Display Grade as</label><br />
                        <label htmlFor="submissionType" className="mt-4">Submission Type</label><br />
                        <label htmlFor="assign" className="mt-4">Assign</label><br />
                        <label htmlFor="due" className="mt-4">Due</label><br />
                        <label htmlFor="availableFrom" className="mt-4">Available from</label><br />
                        <label htmlFor="until" className="mt-4">Until</label><br />
                    </div>

                    {/* Right Column for Form Fields */}
                    <div className="col-md-5">
                        <input type="text" className="form-control mb-2" id="points" defaultValue="100" placeholder="Enter Points" 
                        onChange={(e) => handleInputChange('points', e.target.value)} />
                        <input type="text" className="form-control mb-2" id="assignmentGroup" defaultValue="ASSIGNMENTS" placeholder="Enter Assignment Group" />
                        <input type="text" className="form-control mb-2" id="displayGradeAs" defaultValue="Percentage" placeholder="Enter Display Grade as" />
                        <select className="form-control mb-2" id="submissionType">
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                        <input type="text" className="form-control mb-2" id="assign" defaultValue="everyone" placeholder="Enter Assign To" />

                        {/* Input field for Due Date */}
                        <input
                            type="date"
                            className="form-control mb-2"
                            id="due"
                            value={assignment.due_date}
                            onChange={(e) => handleInputChange('due_date', e.target.value)}
                        />

                        {/* Input field for Available from Date */}
                        <input
                            type="date"
                            className="form-control mb-2"
                            id="available_from"
                            value={assignment.available_from}
                            onChange={(e) => handleInputChange('available_from', e.target.value)}
                        />

                        {/* Input field for Until Date */}
                        <input
                            type="date"
                            className="form-control mb-2"
                            id="until"
                            value={assignment.until}
                            onChange={(e) => handleInputChange('until', e.target.value)}
                        />

                        <button
                            onClick={handleSave}
                            className="btn btn-success ms-2 float-end">
                            Save
                        </button>

                        <button
                            className="btn btn-danger float-end"
                            onClick={goBackToAssignments}>
                            Cancel
                        </button>
                    </div>

                    <div className="col col-2">
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AssignmentEditor;