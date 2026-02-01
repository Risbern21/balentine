import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Yes from "./Yes";
import Blocked from "./Blocked";

const App: React.FC = () => {
  const isLaptop: boolean = window.innerWidth >= 1024;

  if (!isLaptop) {
    return <Blocked />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yes" element={<Yes />} />
    </Routes>
  );
};

export default App;
