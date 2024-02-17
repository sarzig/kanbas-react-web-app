let true1 = true, false1 = false;

function IfElse() {
    return(
        <div>
            <h2>If Else</h2>
            {true1 && <p>true1</p>} (paragraph true1 only renders if true1 is true)
            {!false1 ? <p>!false1</p> : <p>false1</p>}
        </div>
    )
}

export default IfElse