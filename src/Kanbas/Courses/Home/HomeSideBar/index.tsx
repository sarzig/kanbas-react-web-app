// xxx need to change so that this takes argument userRole
function HomeSideBar() {
    return (
        <>
                <p><strong>Course Status</strong></p>
                <div className="d-flex">
                    <button className="btn btn button-sidebar-wide"><i className="fa fa-ban"></i> Unpublish</button>
                    <button className="btn button-sidebar-wide green-button" style={{ marginLeft: '5px' }}><i
                        className="fa fa-check-circle"></i> Published</button>
                </div>

                <br />

                <div className="d-flex flex-column">
                    <a className="btn btn-link button-sidebar-wide" href="google.com"><i className="fa fa-file"></i> Import
                        Existing Content</a>
                    <a className="btn btn-link button-sidebar-wide" href="google.com"><i className="fa fa-cloud-upload"></i>
                        Import from Commons</a>
                    <a className="btn btn-link button-sidebar-wide" href="google.com"><i className="fa fa-crosshairs"></i>
                        Choose
                        Home Page</a>
                    <a className="btn btn-link button-sidebar-wide" href="google.com"><i className="fa fa-line-chart"></i>
                        View
                        Course Stream</a>
                    <a className="btn btn-link button-sidebar-wide" href="google.com"><i className="fa fa-bullhorn"></i> New
                        Announcement</a>
                    <a className="btn btn-link button-sidebar-wide" href="google.com"><i className="fa fa-line-chart"></i>
                        New
                        Analytics</a>
                    <a className="btn btn-link button-sidebar-wide" href="google.com"><i className="fa fa-bell"></i> View
                        Course
                        Notifications</a>
                </div>

                <br />

                <p><strong>To Do</strong></p>
                <hr />
                <p>Grade A1 - ENV + HTML</p>

                <br />

                <p><strong>Coming Up</strong></p>
                <hr />
                <p><i className="fa fa-calendar"></i> View Calendar</p>
                <hr />
       
        </>
    );
};
export default HomeSideBar;