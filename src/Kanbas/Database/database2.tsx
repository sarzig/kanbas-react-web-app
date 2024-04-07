import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import enrollments from "./enrollments.json";
import grades from "./grades.json";
import users from "./users.json";

/*
export {
    courses,
    modules,
    assignments,
    enrollments,
    users,
    grades
};
*/

const db = {
    courses: courses,
    modules: modules,
    assignments: assignments,
    enrollments: enrollments,
    grades: grades,
    users: users
  };
  
export default db;
