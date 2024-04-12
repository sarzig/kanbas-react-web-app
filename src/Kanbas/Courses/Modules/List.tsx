import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { RxDotsVertical } from "react-icons/rx";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import "../../styles.css";
import "../Assignments/index.css";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store"; // Import the KanbasState type
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules // Use KanbasState to define the type
    );
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module // Use KanbasState to define the type
    );
    const dispatch = useDispatch();


    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">

                <li className="list-group-item p-3">

                    <br /><br />
                    Name:
                    <input
                        className = "text-box text-box-title"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))}
                    />

                    <br /><br />
                    Description:
                    <textarea
                        className = "text-box text-box-description"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))}
                    />

                    <br /><br />

                    <button className="btn button-topbar-medium red-button p-1"
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>

                    <button className="btn button-topbar-medium red-button p-1"
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                </li>


                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">

                            <div className="kanbas-modules-title">
                                <PiDotsSixVerticalBold className="modules-icon" />
                                <IoMdArrowDropdown className="modules-icon" />

                                {module.name}

                                <span className="float-end">
                                    <button
                                        className="btn button-topbar-medium red-button mt-0"
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>

                                    <button
                                        className="btn button-topbar-medium red-button mt-0"
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
                                    <FaCheckCircle className="modules-icon icon-green" />
                                    <GoPlus className="modules-icon" />
                                    <RxDotsVertical className="modules-icon" />
                                </span>
                            </div>

                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;