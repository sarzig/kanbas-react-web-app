import { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArraysWithAxios() {
    const API = "http://localhost:4001/a5/todos";

    const [todo, setTodo] = useState({
        id: 1,
        title: "TODO",
        completed: false,
        description: "X"
    });

    const [todos, setTodos] = useState<any[]>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    /*
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
      };
      */

    // Remove todos is new in axios implementation
    const removeTodo = async (todo: { id: any; }) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    // Create todos is new in axios implementation
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    // fetchTodoById is new in axios implementation
    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    // updateTitle is new in axios implementation
    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };



    return (
        <div>
            <h2>3.4.5 - Working with Arrays With Axios</h2>
            <h3>3.3.1 - Retrieving Arrays</h3>
            <a href={API}>
                Get All Todos
            </a>
            <br /><br />

            This unordered list is new in the axios implementation.
            <button onClick={createTodo} >
                Create Todo
            </button>

            <br /><br />
            ID: <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: parseInt(e.target.value)
                })} />

            Title: <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <button onClick={updateTitle} >
                Update Title of Todo with ID {todo.id} to: {todo.title}
            </button>


            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>

                        {todo.title} ({todo.id})

                        <button onClick={() => removeTodo(todo)} >
                            Remove
                        </button>

                        <button onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>


                    </li>
                ))}
            </ul>
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
            <br /><br />
            <h3>3.3.7 - On your own</h3>
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
export default WorkingWithArraysWithAxios;
