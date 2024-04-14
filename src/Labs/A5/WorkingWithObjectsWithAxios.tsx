import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function WorkingWithObjectsWithAxios() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: true,
        score: 0,
    });

    const API_BASE = process.env.REACT_APP_API_BASE;
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;

    // Memoize fetchAssignment using useCallback
    const fetchAssignment = useCallback(async () => {
        try {
            const response = await axios.get(ASSIGNMENT_URL);
            setAssignment(response.data);
        } catch (error) {
            console.error("Error fetching assignment:", error);
        }
    }, [ASSIGNMENT_URL]); // Depend on ASSIGNMENT_URL only

    const updateTitle = async () => {
        try {
            const response = await axios.get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
            setAssignment(response.data);
        } catch (error) {
            console.error("Error updating title:", error);
        }
    };

    useEffect(() => {
        fetchAssignment(); // Initial fetch on component mount
    }, [fetchAssignment]); // Depend on fetchAssignment function

    return (
        <div>
            <h3>3.4.4 - Working With Objects WITH AXIOS</h3>

            <h3>Modifying Properties</h3>
            <input
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                value={assignment.title}
                type="text"
            />
            <button onClick={updateTitle}>
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment}>
                Fetch Assignment
            </button>
        </div>
    );
}

export default WorkingWithObjectsWithAxios;
