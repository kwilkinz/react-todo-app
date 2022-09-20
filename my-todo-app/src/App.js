import React from "react";
import "./App.css";
// importing components folder
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Keri Ann's Todo List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;