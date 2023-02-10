import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js";

function App() {
  return (

    <div class="container">
      <Navbar title = "TextUtils App"></Navbar>
      <TextForm></TextForm>
    </div>

  );
}

export default App;
