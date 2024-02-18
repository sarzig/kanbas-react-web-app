import { Routes, Route, Link } from "react-router-dom";
import Assignment3 from "./A3";
import Assignment4 from "./A4";
import Nav from "../Nav";

function Labs() {
    return (
        <div>
            <Nav />
            <h1>Labs</h1>
            <Link to="/Labs/a3">Assignment 3</Link> |
            <Link to="/Labs/a4">Assignment 4</Link> |
            <Routes>
                <Route path="/a3/*" element={<Assignment3 />} />
                <Route path="/a4/" element={<Assignment4 />} />
            </Routes>
        </div>
    );
}

export default Labs;