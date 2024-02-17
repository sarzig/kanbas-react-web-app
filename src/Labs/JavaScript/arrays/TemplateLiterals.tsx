const five = 2 + 3;
const result1 = "2 + 3 = " + five;
const result2 = `2 + 3 = ${2 + 3}`;
const username = 'alice';
const greeting1 = `Welcome home ${username}`;
const loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;

function TemplateLiterals() {
    return (
        <>
            <h2>2.2.8 Template Literals</h2>
            result1 = {result1}
            result2 = {result2}
            greeting1 = {greeting1}
            greeting2 = {greeting2}
        </>
    )
}
export default TemplateLiterals