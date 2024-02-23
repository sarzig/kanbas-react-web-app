import Labs from "./Labs2";
import HelloWorld from "./Labs2/A3/HelloWorld";
import Kanbas from "./Kanbas2";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  /** 
   * Each component represents the contents of the corresponding index.tsx file
   * within each folder
   */
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Hello" element={<HelloWorld />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;