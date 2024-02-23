import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import BlackTopBar from "./BlackTopBar/";


function Kanbas() {

  return (
    <>
      <div className="row flex">
        <BlackTopBar />
      </div>

      <div className="d-flex">
        <KanbasNavigation />
        <div className="flex-grow-1 p-2">

          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Kanbas;