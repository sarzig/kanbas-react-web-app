// This is the new format of tsx functions


const subtract = (a: number, b: number) => {
    return a - b;
}

const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

function ES6ArrowFunctions() {
    return (
        <>
            <h3>2.2.6.2 New ES6 Arrow Functions</h3>
            threeMinusOne = {threeMinusOne}<br />
            subtract(3,1) = {subtract(3, 1)}<br />
        </>
    );
}
export default ES6ArrowFunctions   