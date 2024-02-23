import Modules from "../Modules";
import HomeSideBar from "./HomeSideBar";
import "../../styles.css";

function Home() {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Modules />
                </div>

                <div className="col course-right-sidebar">
                    <HomeSideBar />
                </div>

            </div>
        </>
    );
};
export default Home;