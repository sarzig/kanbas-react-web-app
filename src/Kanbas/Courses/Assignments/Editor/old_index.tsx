import { useParams } from "react-router-dom";
import GetAssignment from "../../../Functions/GetAssignment";
import { RxDotsVertical } from "react-icons/rx";
function Editor() {


    const assignment = GetAssignment();

    console.log(assignment)


    return (
        <div>
            {assignment ? (
                <div>
                    <div className="row">
                        <div>
                            <div className="d-flex float-end">
                                <button className="btn button-topbar-medium green-button">
                                    <i className="fa fa-check"></i>Published
                                </button>
                                <button className="btn button-topbar-medium mini-button">
                                    <RxDotsVertical />
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <form>
                        <div className="form-group row mb-3">
                            <label htmlFor="assignmentName" className="col-sm-2 col-form-label">Assignment Name<br /></label>
                            <div className="col-12">
                                <input type="text" className="form-control" id="assignmentName" placeholder={assignment.title} />
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <div className="form-control-plaintext" id="loremIpsum">
                                {/* Your assignment description here */}
                            </div>
                        </div>

                        <form className="form" role="form" autoComplete="off">
                            {/* ... other form elements ... */}
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="notifyCheckbox" />
                                <label className="form-check-label" htmlFor="notifyCheckbox">
                                    Notify users that this content has changed
                                </label>
                            </div>

                            <div>
                                <button className="btn button-topbar-medium">Cancel</button>
                                <a href="/Kanbas/Courses/Assignments/screen.html">
                                    <button className="btn button-topbar-medium red-button">Save</button>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>)

                : (<p>Loading or assignment not found</p>)}
        </div>
    );
}

export default Editor;
