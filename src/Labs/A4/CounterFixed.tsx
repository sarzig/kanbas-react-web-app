import React, { useState } from "react";

export default function CounterFixed() {
    const [count, setCount] = useState(7);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count -1)}>Down</button>
        </div>
    )
}