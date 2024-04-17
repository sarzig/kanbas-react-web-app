import { FaCheckCircle } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import "../../styles.css";
import "../Assignments/index.css";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules
} from "./modulesReducer";
import * as client from "./client";

import { KanbasState } from "../../store"; // Import the KanbasState type
import { useEffect } from "react";
import CourseIdExtract from "../../Functions/CourseIdExtract";

function ModuleList() {
    const courseId = CourseIdExtract(); /// change to useParams() like in assignments?
    const dispatch = useDispatch();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules // Use KanbasState to define the type
    );

    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module // Use KanbasState to define the type
    );

    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, 
    //[courseId, dispatch, module, dummy]);
    [courseId, dispatch]); // 

    const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleAddModule = () => {

        client.createModule(courseId, module).then((addedModule) => {
            dispatch(addModule(addedModule));
        });

        // Reset the module to default values
        dispatch(setModule({ name: "New Module", description: "New description" }));
    };

    const handleUpdateModule = () => {

        console.log("client calls Modules/List.tsx: handleUpdateModule: module: ", module);

        client.updateModule(module).then(() => {
            dispatch(updateModule(module));
        });

        // Reset the module to default values
        dispatch(setModule({ name: "New Module", description: "New description" }));
    }

    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">

                <li className="list-group-item p-3">

                    <br /><br />
                    Name:<br />
                    <input
                        className="text-box text-box-title"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))}
                    />

                    <br /><br />
                    Description:<br />
                    <textarea
                        className="text-box text-box-description"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))}
                    />

                    <br /><br />

                    <button className="btn button-topbar-medium red-button p-1"
                        onClick={handleAddModule}>
                        Add
                    </button>

                    <button className="btn button-topbar-medium red-button p-1"
                        onClick={handleUpdateModule}>
                        Update
                    </button>
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module) => (
                        <li key={module._id} className="list-group-item">

                            <div className="kanbas-modules-title">
                                <PiDotsSixVerticalBold className="modules-icon" />
                                <IoMdArrowDropdown className="modules-icon" />

                                {module.name}

                                <span className="float-end">
                                    <button
                                        className="btn button-topbar-medium red-button mt-0"
                                        onClick={() => {
                                            dispatch(setModule(module));
                                        }}>
                                        Edit
                                    </button>

                                    <button
                                        className="btn button-topbar-medium red-button mt-0"
                                        onClick={() => {
                                            handleDeleteModule(module._id);
                                        }
                                        } >
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