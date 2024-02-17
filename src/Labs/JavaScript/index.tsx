import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse"
import TernaryOperator from "./conditionals/TernaryOperator";
import "./styles.css"; // Adjust the path based on your project structure


function JavaScript() {
    console.log("Hello World!");
    return (
        <div>
            <div className="container">
                <h1>Javascript</h1>
                <VariablesAndConstants />
                <VariableTypes />
                <BooleanVariables />
                <IfElse />
                <TernaryOperator />
            </div>
        </div>
    );
}
export default JavaScript