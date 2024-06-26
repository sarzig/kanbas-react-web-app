import { Link } from "react-router-dom";
import "./index.css";

function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[],
    course: any,
    setCourse: (course: any) => void,
    addNewCourse: () => void,
    deleteCourse: (id: string) => void,
    updateCourse: () => void
  }
) {

  const handleUpdateCourse = () => {
    // Invoke addNewCourse function to add a new course
    updateCourse();
  
    // Dispatch an action to set the course state to default values
    setCourse({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/default_no_image_loaded.jpg"
    });
  };

  const handleAddNewCourse = () => {
    // Invoke addNewCourse function to add a new course
    addNewCourse();
  
    // Dispatch an action to set the course state to default values
    setCourse({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/default_no_image_loaded.jpg"
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>All Courses</h2>

      <hr />
      <h5>Add / Update Courses</h5>
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />

      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />

      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />

      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <div onClick={handleAddNewCourse}
        className="btn btn-primary" >
        Add
      </div>

      <div onClick={handleUpdateCourse}
        className="btn btn-primary" >
        Update
      </div>

      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-200">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card flex-shrink-0">

                <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img src={`/images/${course._id.length > 6 ? 'default_no_image_loaded.jpg' : course.image}`} alt="alt_text" className="card-img-top" />
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
                        className="btn btn-primary gray-dashboard-button">
                        Go
                      </Link>

                      <div className="card-button-group">
                        <div className="btn btn-primary gray-dashboard-button"
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

