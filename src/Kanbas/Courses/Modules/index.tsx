import ModuleList from "./List";
import { FaEllipsisV} from "react-icons/fa";

function Modules() {
    return (
        <div>
            <div className="d-flex justify-content-end mb-3">
                <button className="btn button-topbar-medium">Collapse All</button>

                <button className="btn button-topbar-medium">View Progress</button>

                <div className="btn-group">
                    <button type="button" className="btn button-topbar-medium">Publish All</button>
                    <button type="button"
                        className="btn button-topbar-medium dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="google.com">Option 1</a></li>
                        <li><a className="dropdown-item" href="google.com">Option 2</a></li>
                    </ul>
                </div>

                <button className="btn button-topbar-medium red-button">+ Module</button>

                <button className="btn button-topbar-medium"><FaEllipsisV /></button>
            </div>

            <ModuleList />
        </div>
    );
}
export default Modules;
