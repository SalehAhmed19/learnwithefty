import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import SSC from "./Pages/SSC";
import HSC from "./Pages/HSC";
import Admission from "./Pages/Admission";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ssc" element={<SSC />}></Route>
        <Route path="/hsc" element={<HSC />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
      </Routes>
    </div>
  );
}

export default App;
