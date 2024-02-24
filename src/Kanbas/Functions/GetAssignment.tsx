// xxx want this to return null if not found. will require logical handlin for assignments editor
import { useLocation } from "react-router-dom";
import { assignments } from "../../Kanbas/Database";

function GetAssignment() {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');

    // Find index of "Assignments/Editor" in the pathSegments array
    const assignmentEditorIndex = pathSegments.findIndex(segment => {
        const isAssignments = segment === "Assignments";
        const isEditor = pathSegments[pathSegments.indexOf(segment) + 1] === "Editor";

        return isAssignments && isEditor;
    });

    // If "Assignments/Editor" is found and there is a segment after it, return the segment after it as the courseId
    if (assignmentEditorIndex !== -1 && pathSegments.length > assignmentEditorIndex + 2) {
        const assignmentId = pathSegments[assignmentEditorIndex + 2];
        const currentAssignment = assignments.find(assignment => assignment._id === assignmentId);
        return currentAssignment;
    } else {
        // Return an empty string if "Kanbas/Courses" is not found or there is no segment after it
        return null;
    }
}

export default GetAssignment;