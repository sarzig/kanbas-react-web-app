import { Link } from "react-router-dom";
import Assignment3 from "./A3";

function Labs() {
    return (
        <div>
            <Link to="/Labs/a3">A3</Link> |
            <Link to="/Kanbas">Kanbas</Link> |
            <Link to="/hello">Hello</Link>
            <Assignment3 />
        </div>
    );
}

export default Labs;