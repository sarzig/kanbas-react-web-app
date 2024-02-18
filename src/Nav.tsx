// The navigation links in the three lab components can be implemented as a reusable component

import {Link, useLocation} from "react-router-dom";
import LinkContains from "./Functions/LinkContains";
function Nav() {
    const {pathname}=useLocation();

    return (
        <nav className="nav nav-tabs mt-2">
        <Link to="/Labs/a3"
              className={`nav-link ${LinkContains(pathname, "a3", "active")}`}>A3</Link>
        <Link to="/Kanbas"
              className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
        <Link to="/hello"
              className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
      </nav>

    );
}
export default Nav;