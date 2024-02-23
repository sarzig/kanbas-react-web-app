/*

Despite the variable "count" changing (as you can inspect in the console), React
does NOT update the display of count on screen. 

You need to declare a special variable with "useState".

*/

function Counter() {
    let count = 7;
    console.log(count);
    return (
        <div>
            <h2>Counter which does NOT update (but does update in log): {count}</h2>
            <button onClick = {() => {count++; console.log(count); }}>
                Up
            </button>

            <button onClick = {()=> {count--; console.log(count); }}>
                Down
            </button>
        </div>
    );
};
export default Counter;