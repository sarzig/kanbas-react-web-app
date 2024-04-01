import React, { useState } from "react";
import { modules } from "../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { RxDotsVertical } from "react-icons/rx";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import "../../styles.css";
import "../Assignments/index.css";


function ModuleList() {
    const { courseId } = useParams();
    // const modulesList = modules.filter((module) => module.course === courseId);

    const [moduleList, setModuleList] = useState(modules);
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);

    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });

    const addModule = (module: any) => {
        const newModule = {
            ...module,
            _id: new Date().getTime().toString()
        };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
    };

    const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module._id !== moduleId);
        setModuleList(newModuleList);
    };



    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">

                <li className="list-group-item p-3">
                    <button className="btn button-topbar-medium red-button p-1" onClick={() => { addModule(module) }}>
                        Add
                    </button>

                    <br /><br />

                    <input value={module.name}
                        onChange={(e) => setModule({
                            ...module, name: e.target.value
                        })}
                    />

                    <br /><br />

                    <textarea value={module.description}
                        onChange={(e) => setModule({
                            ...module, description: e.target.value
                        })}
                    />
                </li>


                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item"

                            onClick={() => setSelectedModule(module)}>
                            <div className="kanbas-modules-title">
                                <PiDotsSixVerticalBold className="modules-icon" />
                                <IoMdArrowDropdown className="modules-icon" />

                                {module.name}

                                <span className="float-end">
                                    <button
                                        className="btn button-topbar-medium red-button mt-0"
                                        onClick={() => deleteModule(module._id)}>
                                        Delete
                                    </button>
                                    <FaCheckCircle className="modules-icon icon-green" />
                                    <GoPlus className="modules-icon" />
                                    <RxDotsVertical className="modules-icon" />
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson) => (
                                        <li className="list-group-item">
                                            <PiDotsSixVerticalBold className="modules-icon" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="modules-icon icon-green" />
                                                <RxDotsVertical className="modules-icon" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;
