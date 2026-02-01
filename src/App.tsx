import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Yes from "./Yes";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
  );
}

export default App;
