const multiply = (a:number, b:number) => a * b;
const fourTimesFive = multiply(4,5);
console.log(fourTimesFive);

function ImpliedReturn() {
    return(
        <div>
            <h2>2.2.6.3 Implied Return</h2>
            fourTimesFive = {multiply(4,5)}<br/>
            multiply(4, 5) = {fourTimesFive}<br/>
        </div>
    );
}
export default ImpliedReturn