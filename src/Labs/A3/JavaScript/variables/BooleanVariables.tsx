let numberVariable = 123, floatingPointNumber = 234.345;
let true1 = true, false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123; // always use === not ==
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;

function BooleanVariables() {
    return (
        <div>
            <h2>2.2.4 Boolean Variables</h2>
            true1 = {true1.toString()} <br />
            false1 = {false1.toString()} <br />
            false2 = {false2.toString()} <br />
            true2 = {true2.toString()} <br />
            true3 = {true3.toString()} <br />
            true4 = {true4.toString()} <br />
            true5 = {true5.toString()} <br />
            false3 = {false3.toString()} <br />
        </div>
    );
}
export default BooleanVariables