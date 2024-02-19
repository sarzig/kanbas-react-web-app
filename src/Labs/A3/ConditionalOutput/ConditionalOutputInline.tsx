/*
The following example decides to render one content versus another based on a simple boolean constant loggedIn. 
If the user is loggedIn, then the component renders a greeting, otherwise suggests the user should login. 
*/


const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <>
            If user is logged in, the following will show "Welbome Inline". If not, it will show "Please login Inline":
            {loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please login Inline</h2>}
        </>
    );
};
export default ConditionalOutputInline;