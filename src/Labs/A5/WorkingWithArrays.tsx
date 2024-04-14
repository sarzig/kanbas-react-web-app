import React, { useState } from "react";

function WorkingWithArrays() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const API = `${API_BASE}/a5/todos`;

    const [todo, setTodo] = useState({
        id: 1,
        title: "TODO",
        completed: false,
        description: "X"
    });

    return (
        <div>
            <h2>Working with Arrays</h2>
            <h3>3.3.1 - Retrieving Arrays</h3>
            <a href={API}>
                Get All Todos
            </a>
            <br /><br />

            <h3>3.3.2 - Retrieving an Item from an Array by ID</h3>
            <input
                type="number"
                min="0"
                value={todo.id}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    const newId = inputValue === "" ? 0 : parseInt(inputValue, 10);
                    setTodo({
                        ...todo,
                        id: newId
                    });
                }}
            />
            <a href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <br /><br />

            <h3>3.3.3 - Filtering Array Items using a Query String (NOT WORKING)</h3>
            <a href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <br /><br />

            <a href={`${API}?id=3`}>
                Get Todo with ID 3
            </a>
            <br /><br />

            <h3>3.3.4 - Creating new Items in an Array</h3>
            <a href={`${API}/create`}>
                Create Todo
            </a>
            <br /><br />

            <h3>3.3.5 - Deleting an Item From an Array</h3>
            ID: <input type="number"
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })}
                value={todo.id} />
            <a className="btn btn-danger" href={`${API}/${todo.id}/delete`}>
                Delete Todo With ID {todo.id}
            </a>
            <br />            <br />


            <h3>3.3.6 - Updating an Item in an Array</h3>
            ID: <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: parseInt(e.target.value)
                })} />
            <br />
            Title: <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <br />
            <a href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title of Todo with ID {todo.id} to: {todo.title}
            </a>
            <br /><br />

            ID: <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: parseInt(e.target.value)
                })} />
            <br />
            Description: <input type="text" value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value
                })} />
            <br />
            <a href={`${API}/${todo.id}/description/${todo.description}`} >
                Update Description of Todo with ID {todo.id} to: {todo.description}
            </a>
            <br /><br />

            xxx todo: implement the completed attribute!

        </div>
    );
}
export default WorkingWithArrays;
