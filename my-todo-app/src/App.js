//? importing specific state from react library
import React, { useState, useEffect } from "react";
import "./App.css";
//? importing components folder
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js"

function App() {
  // UseState 
  //? useState for Form input 
  const [inputText, setInputText] = useState("");
  // ? useState for TodoList, array = array of objects
  const [todos, setTodos] = useState([]);
  //? UseState for status button in form (visible)
  const [status, setStatus] = useState("all");
  //? useState for filter from the above status
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions 
  // run once Function 
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filteredHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => 
          todo.completed === true))
        break;
      case 'incomplete' :
        setFilteredTodos(todos.filter((todo) => 
          todo.completed === false))
        break;
      default :
        setFilteredTodos(todos);
        break; 
    }
  }
  // Function save Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  } 

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal); 
    }
  };

  //* webpage ready
  return (
    <div className="App">
      <header>
        <h1>Keri Ann's Todo List</h1>
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText} 
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        />
      <TodoList 
        todos={todos}
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;