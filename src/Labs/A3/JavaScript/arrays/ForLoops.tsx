/*
We can operate on each array value by iterating over them in a for loop. 
*/

let stringArray1 = ['string1', 'string2'];
let stringArray2: string[] = [];

for (let i = 0;
    i < stringArray1.length;
    i++) {
    const string1 = stringArray1[i];
    stringArray2.push(
        string1.toUpperCase());
}

function ForLoops() {
    return (
        <>
            <h2>2.2.7.3 For Loops</h2>
            stringArray2 = {stringArray2}<br />
        </>
    );
}
export default ForLoops