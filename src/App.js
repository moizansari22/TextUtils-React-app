import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  return (
    <>
      <Navbar title="TextUtils App"></Navbar>
      <TextForm heading="Enter the text to Analyze below"></TextForm>
    </>
  );
}

export default App;
