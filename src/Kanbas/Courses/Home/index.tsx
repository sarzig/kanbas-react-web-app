import Modules from "../Modules";
import HomeSideBar from "./HomeSideBar";

function Home() {
    return (
        <>
            <div className="row">
                <div className="col-9">
                    <Modules />;
                </div>

                <div className="col-3">
                    <HomeSideBar />;
                </div>

            </div>
        </>
    );
};
export default Home;