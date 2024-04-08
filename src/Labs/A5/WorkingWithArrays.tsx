import React, { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4001/a5/todos";

    const [todo, setTodo] = useState({ id: 1 });

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API}>
                Get Todos
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
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

            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <br />

            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`}>
                Create Todo
            </a>
            <br />

        </div>
    );
}
export default WorkingWithArrays;
