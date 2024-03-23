import { Routes, Route, Navigate } from "react-router-dom";
import Assignment3 from "./A3";
import Assignment4 from "./A4";
import Assignment5 from "./A5";
import Nav from "../Nav";
import { Provider } from "react-redux";
import store from "./store";

function Labs() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                <div style={{ margin: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="a4" />} />
                        <Route path="a3" element={<Assignment3 />} />
                        <Route path="a4" element={<Assignment4 />} />
                        <Route path="a5" element={<Assignment5 />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Labs;