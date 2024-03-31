import React,  { useState } from "react";
import ReduxExamples from "./ReduxExamples";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import CounterFixed from "./CounterFixed"
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import HelloRedux from "./ReduxExamples/HelloRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";

function Assignment4() {

    function sayHello() {
        alert("Hello");
    }
    const [counter, setCounter] = useState(123);

    return (
        <div>
            <h1>Assignment 4</h1><br /><br />
            <ClickEvent /><br /><br />
            <PassingDataOnEvent /><br /><br />
            <PassingFunctions theFunction={sayHello} /><br /><br />
            <EventObject /><br /><br />
            <h1>Use State Hook</h1>
            The useState hook is used to declare state variables that we want to affect the DOM rendering. The syntax of the useState hook is shown below:<br />
            const [stateVariable, setStateVariable] = useState(initialValue);<br /><br />
            To avoid unnecessary and slow updates to the DOM, React.js only updates the real DOM if there have been changes to the virtual DOM.

            The useState hook takes as argument the initial value of a state variable and returns an array whose first item consists of the initialized state variable, and the second item is a mutator function that allows updating the state variable. The array destructor syntax is commonly used to bind these items to local constants as shown above. The mutator function not only changes the value of the state variable, but it also notifies React.js that it should check if the state has caused changes to the virtual DOM and therefore make changes to the actual DOM. The following exercises introduce various use cases of the useState.
            <br /><br />
            <Counter /><br />
            This counter does NOT work to update the DOM (it does actually print to console) because we need to tell React.js that changes to a particular variable is indeed relevant to changes in the DOM. To do this, use the useState hook to declare the state variable and update it using the mutator function as shown below. Now, changes to the state variable are rperesented as changes in the DOM. 
            <br /><br />
            <CounterFixed /><br /><br />
            <BooleanStateVariables /><br /><br />
            <StringStateVariables /><br /><br />
            <DateStateVariable /><br /><br />
            <ObjectStateVariable /><br /><br />
            <ArrayStateVariable /><br /><br />

            This is the component which will be used in ParentStateComponent (sharing state). Right now it is directly managing its own state.
            <ChildStateComponent
                counter={counter}
                setCounter={setCounter} /><br /><br />
            
            This is accessing the SAME ChildStateComponent but through a parent:
            <ParentStateComponent /><br /><br />

            <ReduxExamples />
            <HelloRedux /><br /><br />            
            <AddRedux /><br /><br />
            <CounterRedux /><br /><br />
        </div>
    );
};
export default Assignment4;