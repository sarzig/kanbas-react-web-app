import React, { useState } from "react";


function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: true,
        score: 0,
    });

    const ASSIGNMENT_URL = `http://localhost:4001/a5/assignment`;

    const [module, setModule] = useState({
        id: 1,
        name: "Baby's First Module",
        description: "This module will teach you how to make a module (META)",
        course: "Baby 101"
    });

    const MODULE_URL = `http://localhost:4001/a5/module`;


    return (
        <div>
            <h3>Working With Objects</h3>

            <h3>Retrieving Objects</h3>
            <a href={`http://localhost:4001/a5/assignment`}>
                Get Assignment
            </a>
            <br /><br />

            <h3>3.2.2 Retrieving Properties</h3>
            <a href="http://localhost:4001/a5/assignment/title">
                Get Title
            </a>
            <br />
            <a href="http://localhost:4001/a5/assignment/score">
                Get Score
            </a>
            <br />
            <a href="http://localhost:4001/a5/assignment/completed">
                Get Completed
            </a>
            <br /><br />


            <h3>3.2.3 Modifying Properties</h3>


            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <a className="btn btn-danger" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <br />

            <input type="number"
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
                value={assignment.score} />
            <a className="btn btn-danger" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Assignment Score
            </a>
            <br />

            {/** todo: checkbox logic isn't working well */}
            <input type="checkbox"
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: e.target.checked
                })}
                checked={Boolean(assignment.completed)}
            />
            <a className="btn btn-danger" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Assignment Completed Value
            </a>
            <br />


            <br /><br />
            <h2>Modules - On Your Own</h2>
            <h3>Retrieving Objects</h3>
            <a href={`http://localhost:4001/a5/module`}>
                Get Module
            </a>
            <br /><br />

            <h3>3.2.2 Retrieving Properties</h3>
            <a href="http://localhost:4001/a5/module/name">
                Get Module Name
            </a>
            <br />
            <a href="http://localhost:4001/a5/module/id">
                Get Module ID
            </a>
            <br />
            <a href="http://localhost:4001/a5/module/description">
                Get Module Description
            </a>
            <br />
            <a href="http://localhost:4001/a5/module/course">
                Get Module Course
            </a>
            <br /><br />


            <h3>3.2.3 Modifying Properties</h3>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />
            <a className="btn btn-danger" href={`${MODULE_URL}/title/${module.name}`}>
                Update Module Name
            </a>
            <br />

            <input type="number"
                onChange={(e) => setModule({
                    ...module,
                    id: parseInt(e.target.value)
                })}
                value={module.id} />
            <a className="btn btn-danger" href={`${MODULE_URL}/id/${module.id}`}>
                Update Module ID
            </a>
            <br />

            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    description: e.target.value
                })}
                value={module.description} />
            <a className="btn btn-danger" href={`${MODULE_URL}/description/${module.description}`}>
                Update Module description
            </a>
            <br />

            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    course: e.target.value
                })}
                value={module.course} />
            <a className="btn btn-danger" href={`${MODULE_URL}/course/${module.course}`}>
                Update Module Course
            </a>
        </div >
    );
}
export default WorkingWithObjects;
