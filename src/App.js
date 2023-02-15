import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import Alert from './components/Alert.js';
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setalert] = useState({
      message: "this is testing of alert msg",
      type: "warning"
  })

  const showAlert = (msg,type) => {
    setalert({
      message: msg,
      type: type 
    })
  }

  const toggleMode = () => {
    if(mode === 'dark')
    {
      setMode('light')
      document.body.style.backgroundColor = 'black'
      showAlert("the message has been showed","sucess")
    }
    else
    {
      setMode('dark')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils App" mode={mode} toggleMode={toggleMode} />
      <Alert myalert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/stringOperations" element={<TextForm heading="Enter the text to Analyze below" showAlert={showAlert}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
