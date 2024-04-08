import React, { useState } from "react";
function EncodingParametersInURLs() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(2);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" value={a}
        onChange={(e) => setA(parseInt(e.target.value))} />
      <input type="number"
        onChange={(e) => setB(parseInt(e.target.value))} value={b} />
      <h3>3.1.1 Path Parameters</h3>
      <a href={`http://localhost:4001/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      (http://localhost:4001/a5/add/${a}/${b})
      <br />

      <a href={`http://localhost:4001/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
      (http://localhost:4001/a5/subtract/${a}/${b})
      <br />

      <a href={`http://localhost:4001/a5/multiply/${a}/${b}`}>
        Multiply {a} x {b}
      </a>
      (http://localhost:4001/a5/multiply/${a}/${b})
      <br />

      <a href={`http://localhost:4001/a5/divide/${a}/${b}`}>
        Divide {a} / {b}
      </a>
      (http://localhost:4001/a5/divide/${a}/${b})
      <br /><br />

      <h3>3.1.2 Query Parameters</h3>
      <a
        href={`http://localhost:4001/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      (http://localhost:4001/a5/calculator?operation=add&a=${a}&b=${b})
      <br />

      <a
        href={`http://localhost:4001/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Substract {a} - {b}
      </a>
      (http://localhost:4001/a5/calculator?operation=subtract&a=${a}&b=${b})
      <br />

      <a
        href={`http://localhost:4001/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} x {b}
      </a>
      (http://localhost:4001/a5/calculator?operation=multiply&a=${a}&b=${b})
      <br />

      <a
        href={`http://localhost:4001/a5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b}
      </a>
      (http://localhost:4001/a5/calculator?operation=divide&a=${a}&b=${b})
      <br />

    </div>
  );
}
export default EncodingParametersInURLs;
