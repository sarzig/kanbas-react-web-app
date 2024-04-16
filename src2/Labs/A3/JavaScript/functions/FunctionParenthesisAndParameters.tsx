const square = (a: number) => a * a;
const plusOne = (a: number) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);

function FunctionParenthesisAndParameters() {
    return (
        <div>
            <h2>2.2.6.4 Function Partenthesis and Parameters</h2>
            twoSquared = {twoSquared} <br />
            square(2) = {square(2)} <br />
            threePlusOne = {threePlusOne} <br />
            plusOne(3) = {plusOne(3)} <br />
        </div>
    );
}
export default FunctionParenthesisAndParameters