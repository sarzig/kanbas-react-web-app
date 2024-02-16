import Reach from "react";
import logo from "./logo.svg";
import HelloWorld from "./HelloWorld";
import Labs from "./Labs";
import { HashRouter, Routes } from "react-router-dom";

function App() {

    return (
        <>
        <HashRouter>
            <Link to="/Labs">Labs</Link>
            <Link to="/Kanbas">Kanbas</Link>
            <Link to="/Hello">Hello</Link>

            <Routes>
                <Route path="/Labs" element=></Route>
                <Route path></Route>
            </Routes> // Routes are like a switch case
            <h1>Kanbas</h1>
            </HashRouter></>
    )
}