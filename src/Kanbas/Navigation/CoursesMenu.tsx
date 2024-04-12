// src/Kanbas/Navigation/CoursesMenu.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface Course {
    _id: string;
    name: string;
    number: string;
}

interface CoursesMenuProps {
    courses: Course[];
    hideCoursePopupMenu: () => void;
}

const CoursesMenu: React.FC<CoursesMenuProps> = ({ courses, hideCoursePopupMenu }) => (
    <div className="courses-menu">
        <ul>
            {courses.map((course, index) => (
                <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    onClick={hideCoursePopupMenu}
                    className="course-menu-link"
                >
                    <li key={index}>
                        {course.number}: {course.name}
                    </li>
                </Link>
            ))}
        </ul>
    </div>
);

export default CoursesMenu;