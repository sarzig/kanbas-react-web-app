/*

Despite the variable "count" changing (as you can inspect in the console), React
does NOT update the display of count on screen. 

You need to declare a special variable with "useState".

*/

import React, {useState} from "react";

function CounterWithState() {
    //let count = 7;
    const [count, setCount] = useState(7); // equivalent to let count = 7;
    console.log(count);

    return (
        <div>
            <h2>Counter which DOES update via useState: {count}</h2>
            <button onClick = {() => setCount(count + 1)}>
                Up
            </button>

            <button onClick = {() => setCount(count - 1)}>
                Down
            </button>
        </div>
    );
};
export default CounterWithState;