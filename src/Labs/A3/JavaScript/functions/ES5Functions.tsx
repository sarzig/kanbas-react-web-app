function add(a: number, b: number) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

function ES5Functions() {
    return (
        <>
            <h1>2.2.6 Functions</h1>
            <h3>2.2.6.1 Legacy ES5 Functions:</h3>
            twoPlusFour = {twoPlusFour}<br />
            add(2,4) = {add(2, 4)}<br />
        </>
    );
}
export default ES5Functions