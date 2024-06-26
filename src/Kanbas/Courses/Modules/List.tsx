import { FaCheckCircle } from "react-icons/fa";
//import { useParams } from "react-router";
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

    let dummy = 1; // this is to force changes to be detected

    const dummyIncrementer = () => {
        dummy++;
    };

    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId, dispatch, module, dummy]);

    const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
        dummyIncrementer(); // force update with useEffect
    };

    const handleAddModule = () => {
        dummyIncrementer(); // force update with useEffect

        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });

        // Reset the module to default values
        dispatch(setModule({ name: "New Module", description: "New description" }));
        dummyIncrementer(); // force update with useEffect
    };

    const handleUpdateModule = () => {
        dummyIncrementer(); // force update with useEffect

        console.log("client calls Modules/List.tsx: handleUpdateModule: module: ", module);

        client.updateModule(module).then((module) => {
            dispatch(updateModule(module));
        });
        client.updateModule(module).then((module) => {
            dispatch(updateModule(module));
        });
        dummyIncrementer(); // force update with useEffect

        // Reset the module to default values
        dispatch(setModule({ name: "New Module", description: "New description" }));
        dummyIncrementer(); // force update with useEffect
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
                        Update (Double Click)
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
                                        onClick={() => {
                                            dispatch(setModule(module));
                                            dummyIncrementer();
                                        }}>
                                        Edit
                                    </button>

                                    <button
                                        className="btn button-topbar-medium red-button mt-0"
                                        onClick={() => {
                                            handleDeleteModule(module._id);
                                            dummyIncrementer();
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