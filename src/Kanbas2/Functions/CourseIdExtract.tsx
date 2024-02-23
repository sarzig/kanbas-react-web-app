/**
 * CourseIdExtract - Extracts the courseId from the location.
 *
 * @returns {string} - courseId
 *
 * @example
 * // Usage in a React component
 * import React from 'react';
 * import LocationLastElement from './LocationLastElement';
 *
 * function YourComponent() {
 *   const courseId = CourseIdExtract();
 *
 *   return (
 *     <div>
 *       <p>{lastSegment}</p>
 *       // Other components or elements
 *     </div>
 *   );
 * }
 *
 * export default YourComponent;
 */

import { useLocation } from "react-router-dom";

function CourseIdExtract() {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');

    // Find index of "Kanbas2/Courses" in the pathSegments array
    const kanbasCoursesIndex = pathSegments.findIndex(segment => {
        const isKanbas = segment === "Kanbas";
        const isCourses = pathSegments[pathSegments.indexOf(segment) + 1] === "Courses";

        return isKanbas && isCourses;
    });

    // If "Kanbas2/Courses" is found and there is a segment after it, return the segment after it as the courseId
    if (kanbasCoursesIndex !== -1 && pathSegments.length > kanbasCoursesIndex + 2) {
        const courseId = pathSegments[kanbasCoursesIndex + 2];
        return courseId;
    } else {
        // Return an empty string if "Kanbas2/Courses" is not found or there is no segment after it
        return '';
    }
}

export default CourseIdExtract;