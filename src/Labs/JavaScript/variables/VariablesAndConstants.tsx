function VariablesAndConstants() {
    // "var" is scoped globally or at the function
    var functionScoped = 2;

    // "let" is scoped in the "block" - whatever curly braces
    // surround the "let".
    // Let CAN be updated but CANNOT be re-declared
    let blockScoped = 5;

    // "const" is block scoped as well
    // Const CANNOT be updated nor re-declared
    const constant1 = functionScoped - blockScoped;

    return(
        <div>
            <h2> Variables and Constants</h2>
            functionScoped = {functionScoped}<br/>
            blockScoped = {blockScoped}<br/>
            constant1 = {constant1}<br/>
        </div>
    );
}
export default VariablesAndConstants