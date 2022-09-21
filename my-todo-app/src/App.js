//? importing specific state from react library
import React, { useState } from "react";
import "./App.css";
//? importing components folder
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js"

function App() {
  //? useState for Form input 
  const [inputText, setInputText] = useState("");
  // ? useState for TodoList, array = array of objects
  const [todos, setTodos] = useState([]);

  
  //* webpage ready
  return (
    <div className="App">
      <header>
        <h1>Keri Ann's Todo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList setTodos={setTodos} />
    </div>
  );
}

export default App;