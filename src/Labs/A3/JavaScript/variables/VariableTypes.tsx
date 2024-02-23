function variableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World';
    // let stringVariableDoubleQuote = "Hello World2";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    let typeOfType = typeof isBoolean;
    return (
        <div>
            <h2>2.2.3 Variable Types</h2>
            numberVariable = {numberVariable}<br/>
            floatingPointNumber = {floatingPointNumber}<br/>
            stringVariable = {stringVariable}<br/>
            booleanVariable = {booleanVariable.toString()}<br/>
            isNumber = {isNumber}<br/>
            isString = {isString}<br/>
            isBoolean = {isBoolean}<br/>
            typeOfType = {typeOfType}<br/>
        </div>
    );

}

export default variableTypes;
