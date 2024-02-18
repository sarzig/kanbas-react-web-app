/*
An array's map function can iterate over an array's values, apply a function to each value, and collate all the 
results in a new array. The first example below iterates over the numberArray1 and calls the square function 
for each element. The square function was declared earlier in this document and it accepts a parameter and 
returns the square of the parameter. The map function collates all the squares into a new array called squares 
as shown below. The second example does the same thing, but uses a function that calculates the cubes of all 
numbers in the same numberArray1 array. To practice with map, implement a new component called MapFunction based 
on the code below. Import this new component in WorkingWithArrays and confirm the browser renders as shown.
*/

let numberArray1 = [1, 2, 3, 4, 5, 6];
const square = (a: number) => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

function MapFunction() {
    return (
        <>
            <h2>2.2.7.4 The Map Function</h2>
            sqares = {squares}<br />
            cubes = {cubes}<br />
        </>
    );
}
export default MapFunction