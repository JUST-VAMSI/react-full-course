import React from "react";
import Navbar from "./components/Navbar";
// import Final from "./8-custome hook/FirstAPI";
// import Final2 from "./8-custome hook/SecondAPI";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {Routes,Route} from "react-router-dom";
import Success from "./components/Success";



function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
   </div>
  );
};

export default App;
