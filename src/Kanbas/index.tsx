import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { courses } from "./Database";
import BlackTopBar from "./BlackTopBar/";
import WhiteTopBar from "./WhiteTopBar/";

import LocationLastElement from "./Functions/LocationLastElement";


function Kanbas() {

  return (
    <>
      <div className="row flex">
        <BlackTopBar />
        <WhiteTopBar />
      </div>

      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>

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