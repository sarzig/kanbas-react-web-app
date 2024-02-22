import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-200">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card flex-shrink-0">

                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img src={`/images/${course.image}`} className="card-img-top" />
                </Link>

                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`} title={`${course.name} - Homepage`}>

                  <div className="card-body">

                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}>
                      {course.name}
                    </Link>

                    <div className="card-code">
                      {course.number}
                    </div>

                    <div className="card-details">
                      {course.startDate} to {course.endDate}
                    </div>

                    <Link to={`/Kanbas/Courses/${course._id}/Assignments`} title={`${course.name} - Assignments`} className="btn btn-primary">
                      Go
                    </Link>

                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}
export default Dashboard;
