import { Routes, Route, Link } from "react-router-dom";
import Add from "./Add";

function PathParameters() {
    return (
        <div>
            <h2>2.3.3 Path Parameters</h2>
            <Link to="/Labs2/A3/Add/1/2">1 + 2</Link><br />
            <Link to="/Labs2/A3/Add/3/4">3 + 4</Link><br /><br />
            <Routes>
                <Route path="add/:a/:b" element={<Add />} />
            </Routes>
        </div>
    );
};
export default PathParameters;