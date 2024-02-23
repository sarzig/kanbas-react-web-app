var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1,2,3,4,5,6];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];

function WorkingWithArrays() {
    return (
        <div>
            <h1>2.2.7 Working with Arrays</h1>
            numberArray1 = {numberArray1}
            stringArray1 = {stringArray1}
            variableArray1 = {variableArray1}
        </div>
    );
}
export default WorkingWithArrays