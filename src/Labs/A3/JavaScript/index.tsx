import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse"
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import MyQuestions from "../MyQuestions";
import ES6ArrowFunctions from "./functions/ES6ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturns";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters"
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import AddingAndRemovingArrayData from "./arrays/AddingAndRemovingArrayData";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction"
import TemplateLiterals from "./arrays/TemplateLiterals"
import House from "./json/House"
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

// import "./styles.css"; // Adjust the path based on your project structure


function JavaScript() {
    console.log("Hello World!");
    return (
        <div>
            <div className="container">
                <h1>Javascript Portion of Lab</h1><br/>
                <MyQuestions /><br/>
                <VariablesAndConstants /><br/>
                <VariableTypes /><br/>
                <BooleanVariables /><br/>
                <IfElse /><br/>
                <TernaryOperator /><br/>
                <ES5Functions /><br/>
                <ES6ArrowFunctions /><br/>
                <ImpliedReturn /><br/>
                <FunctionParenthesisAndParameters /><br/>
                <WorkingWithArrays /><br/>
                <AddingAndRemovingArrayData /><br/>
                <ForLoops /><br/>
                <MapFunction /><br/>
                <JsonStringify /><br/>
                <FindFunction /><br/>
                <FindIndex /><br/>
                <FilterFunction /><br/>
                <TemplateLiterals /><br/>
                <House /><br/>
                <Spreading /><br/>
                <Destructing /><br/>
                <FunctionDestructing/><br/>
                
                <br /><br /><br /><br /><br />
            </div>
        </div>
    );
}
export default JavaScript