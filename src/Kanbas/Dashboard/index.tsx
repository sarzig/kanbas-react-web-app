import React from "react";
import { Link } from "react-router-dom";
// import { courses } from "../Database";
import "./index.css";

function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[],
    course: any,
    setCourse: React.Dispatch<React.SetStateAction<any>>,
    addNewCourse: () => void,
    deleteCourse: (id: string) => void,
    updateCourse: () => void
  }
) {

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button onClick={addNewCourse} >
        Add
      </button>

      <button onClick={updateCourse} >
        Update
      </button>

      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-200">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card flex-shrink-0">

                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img src={`/images/${course.image}`} alt="alt_text" className="card-img-top" />
                </Link>

                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`} title={`${course.name} - Homepage`}>

                  <div className="card-body">

                    <Link className="card-title underline-target-text" to={`/Kanbas/Courses/${course._id}/Home`}>
                      {course.name}

                      <br />


                    </Link>

                    <div className="card-code">
                      {course.number}
                    </div>

                    <div className="card-details">
                      {course.startDate} to {course.endDate}
                    </div>

                    <br />

                    <div className="card-buttons">
                      <Link to={`/Kanbas/Courses/${course._id}/Assignments`} title={`${course.name} - Assignments`} 
                      className="btn btn-primary">
                        Go
                      </Link>

                      <div className="card-button-group">
                        <div className="btn btn-primary"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}>
                          Edit
                        </div>

                        <div className="btn btn-primary red-button"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}>
                          Delete
                        </div>

                      </div>
                    </div>


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
