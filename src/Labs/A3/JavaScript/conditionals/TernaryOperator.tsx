/*
The ternary operator has logic:

If loggedIn is true, then welcome will display.
Otherwise, "please login" will display.

*/

function TernaryOperator() {
    let loggedIn = false;
    return (
        <div>
            <h2>2.2.5.2 Ternary Operator</h2>
            {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
        </div>
    );

}

export default TernaryOperator