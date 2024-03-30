import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Other imports
import './App.css';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message, type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark Mode enabled successfully!", "success");
      document.title = 'Textutils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode enabled successfully!", "success");
      document.title = 'Textutils - Dark Mode';
    }
  }
  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About Textutils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alerts alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
