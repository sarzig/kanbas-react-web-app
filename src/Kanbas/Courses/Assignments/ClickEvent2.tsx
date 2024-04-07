import { FaCheckCircle, FaTrash } from "react-icons/fa";


function ClickEvent2() {
    const hello = () => {
        alert("Hello World!");
    };
    const lifeIs = (good: string) => {
        alert(`Life is ${good}`);
    };
    return (
        <div>
            <button className="modules-icon icon-red"
                onClick={() => {
                    hello();
                }}
            >
                X
            </button>
        </div>
    );
}
export default ClickEvent2;

/*

const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`);
};
function PassingDataOnEvent() {
    return (
        <div>
            <h2>Passing Data on Event</h2>
            <button onClick={() => add(2, 3)}
                // onClick={add(2, 3)}
                className="btn btn-primary">
                Pass 2 and 3 to add()
            </button>
        </div>
    );
}
export default PassingDataOnEvent;


*/