/**
 * LocationLastElement - Extracts the last segment from the current URL path and formats it.
 *
 * @returns {string} - Formatted last segment of the current URL path.
 *
 * @example
 * // Usage in a React component
 * import React from 'react';
 * import LocationLastElement from './LocationLastElement';
 *
 * function YourComponent() {
 *   const lastSegment = LocationLastElement();
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

function LocationLastElement() {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    const formattedLastSegment = lastSegment.replace(/-/g, ' ');

    return formattedLastSegment;
};
export default LocationLastElement;