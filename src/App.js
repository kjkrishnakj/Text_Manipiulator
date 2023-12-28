import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import About from './components/About';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }

  }

  return (
    <>
    
      <BrowserRouter>
      <Navbar title="TextManipulator " mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
            <Routes>
            <Route path="/about"element={<About />}/>
            </Routes>
            <Routes>
            <Route path="/Text_Manipiulator"
            element={<TextForm heading="Enter your text" mode={mode} />}/>
            </Routes>
      </div>
          </BrowserRouter>
      
    </>
  );
}

export default App;
