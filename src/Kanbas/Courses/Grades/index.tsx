import { assignments, enrollments, grades, users } from "../../Database";
import CourseIdExtract from "../../Functions/CourseIdExtract";


function Grades() {
    const courseId = CourseIdExtract();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <>
            <h1>Grades</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {as.map((assignment) => (
                                <th key={assignment._id}>{assignment.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);

                            return (
                                <tr key={enrollment._id}>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                        );

                                        return <td key={assignment._id}>{grade?.grade || ""}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Grades;
