import "./App.css";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Portfolio from "./Pages/Portfolio";
// import Contacts from "./Pages/Contacts";
import Navbar from "./Component/Navbar/Navbar";
import Portfolio from "./Component/Card/Card";
import About from "./Component/AboutComp/AboutComp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          {/* <Route path="/Portfolio" element={<Contacts />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
