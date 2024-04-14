import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjectsWithAxios() {

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: true,
        score: 0,
    });

    const ASSIGNMENT_URL = `http://localhost:4001/a5/assignment`;

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };


    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };

    useEffect(() => {
        const fetchAssignment = async () => {
            const response = await axios.get(`${ASSIGNMENT_URL}`);
            setAssignment(response.data);
        };

        fetchAssignment(); // Initial fetch on component mount

        // Include fetchAssignment in the dependency array
    }, [fetchAssignment, ASSIGNMENT_URL]); // Now useEffect will re-run if fetchAssignment changes

    return (
        <div>
            <h3>3.4.4 - Working With Objects WITH AXIOS</h3>

            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>


        </div >
    );
}
export default WorkingWithObjectsWithAxios;
