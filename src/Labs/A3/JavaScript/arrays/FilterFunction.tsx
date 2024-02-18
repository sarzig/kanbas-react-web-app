let numberArray1 = [1, 2, 4, 5, 6];
let numbersGreaterThan2 = numberArray1.filter(a => a > 2);
let evenNumbers = numberArray1.filter(a => a % 2 === 0);
let oddNumbers = numberArray1.filter(a => a % 2 !== 0);

function FilterFunction() {
    return (
        <>
            numbersGreaterThan2 = {numbersGreaterThan2}<br />
            evenNumbers = {evenNumbers}<br />
            oddNumbers = {oddNumbers}<br />
        </>
    )
}
export default FilterFunction