import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import EncodingParametersInURLsAxios from "./EncodingParametersInURLsAxios";
import WorkingWithObjectsWithAxios from "./WorkingWithObjectsWithAxios";
import WorkingWithArraysWithAxios from "./WorkingWithArraysWithAxios";


function Assignment5() {
    const API_BASE = process.env.REACT_APP_API_BASE;

    return (
        <div>
            <h1>Assignment 5</h1>
            <a href={`${API_BASE}/a5/welcome`}>
                Welcome
            </a><br /><br />

            <EncodingParametersInURLs /><br />
            <WorkingWithObjects /><br />
            <WorkingWithArrays /><br />
            <EncodingParametersInURLsAxios /><br />
            <WorkingWithObjectsWithAxios /><br />
            <WorkingWithArraysWithAxios /><br />

        </div>
    );
}
export default Assignment5;
