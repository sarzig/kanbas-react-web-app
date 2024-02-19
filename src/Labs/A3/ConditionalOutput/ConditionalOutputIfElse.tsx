/*
A more compact way we can achieve the same thing by including the conditional content in a boolean expression 
that short circuits the content if its false, or evaluates the expression if it's true. 
*/

const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if (loggedIn) {
        return (<h2>Welcome If Else</h2>);
    } else {
        return (<h2>Please login If Else</h2>);
    }
};
export default ConditionalOutputIfElse;