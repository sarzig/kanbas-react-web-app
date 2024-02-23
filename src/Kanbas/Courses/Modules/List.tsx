import React, { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "../../styles.css";
import "../Assignments/index.css";
import { RxDotsVertical } from "react-icons/rx";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoPlus } from "react-icons/go";



function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        <div className="kanbas-modules-title">
                            <PiDotsSixVerticalBold className="modules-icon" />
                            <IoMdArrowDropdown className="modules-icon" />

                            {module.name}

                            <span className="float-end">
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
