


/* Black bar that pops up on small screen */

function TopBar() {
    return (
        <>
            <div className="row above-main-content-small-screen align-items-center text-center flex d-md-none">
                <div className="col-2 text-start">
                    <i className="fa fa-bars"></i>
                </div>

                <div className="col-8 justify-content-center">
                    <a href="#">CS1234: Advanced Bromance<br />Modules</a>
                </div>

                <div className="col-2 text-end">
                    <i className="fa fa-eye"></i><i className="fa fa-chevron-circle-down"></i>
                </div>
            </div>
        </>
    );
};
export default TopBar;