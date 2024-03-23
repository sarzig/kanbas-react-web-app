import db from "../Database/index.js"

export default function CoursesRoutes(app) {
    // CRUD
    const retrieveAllCourses = (req, res) => {
        res.json(db.courses);
    };
    
    const retrieveCourseById = (req, res) => {};
    const createCourse = (req, res) => {};
    const deleteCourse = (req, res) => {};
 
    // if the path comes in with a get request that looks like /courses, then retrieve all courses
    // there's no primary key --> assumption is we're retrieving ALL courses
    app.get("/api/courses", retrieveAllCourses); 
    
    // 

    

}