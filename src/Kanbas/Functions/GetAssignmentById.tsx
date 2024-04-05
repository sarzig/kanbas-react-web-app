import { assignments } from "../../Kanbas/Database";


const GetAssignmentById = (assignmentId: string) => {
    // Assuming assignments is an array of assignment objects fetched from "../../Kanbas/Database"
    const assignment = assignments.find(assignment => assignment._id === assignmentId);
    return assignment;
};

export default GetAssignmentById;
