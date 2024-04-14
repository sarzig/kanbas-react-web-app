import React, { useEffect, useState } from "react";
import axios from "axios";
function EncodingParametersInURLs() {
    const API_BASE = process.env.REACT_APP_API_BASE;

    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [result, setResult] = useState(0);
    const fetchSum = async (a: number, b: number) => {
        const response = await
            axios.get(`${API_BASE}/a5/add/${a}/${b}`);
        setResult(response.data);
    };
    const fetchSubtraction = async (a: number, b: number) => {
        const response = await axios.get(
            `${API_BASE}/a5/subtract/${a}/${b}`);
        setResult(response.data);
    };



    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async () => {
        const response = await axios.get(`${API_BASE}/a5/welcome`);
        setWelcome(response.data);
    };
    useEffect(() => {
        fetchWelcome();
    }, []);

    return (
        <div>
            <h3>3.4.1 - 3.4.3 Encoding Parameters In URLs With Axios and Cors</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>

            <h4>Calculator</h4>
            <input type="number" value={a}
                onChange={(e) => setA(parseInt(e.target.value))} />

            <input type="number"
                onChange={(e) => setB(parseInt(e.target.value))} value={b} />
            <br /><br />
            Result:
            <br />
            <input value={result} type="number" readOnly />
            <br /><br />
            <h3>Fetch Result</h3>
            <button onClick={() => fetchSum(a, b)} >
                Fetch Sum of {a} + {b}
            </button>
            <button onClick={() => fetchSubtraction(a, b)} >
                Fetch Substraction of {a} - {b}
            </button>


        </div>
    );
}
export default EncodingParametersInURLs;