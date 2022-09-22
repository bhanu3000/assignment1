
import './App.css';
import React from "react"
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Login from "./component/Login"
import About from "./component/About"
import Skills from "./component/Skills"
import Experience from "./component/Experience"
import Contact from './component/Contact';
import Recommendations from './component/Recommendation';

function App() {

  return (
    <div className="App">
       
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
         <Route path="/experience" element={<Experience/>} />
         <Route path="/contactme" element={<Contact/>} />
         <Route path="/recommendations" element={<Recommendations/>} />
      </Routes>
    </BrowserRouter>
       
    </div>
  );
  
}


export default App;
