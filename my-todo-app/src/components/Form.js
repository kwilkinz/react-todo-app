import React from "react"

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    // Write jsx code here & functions
    //? Connect app state to your textbox. 
    const inputTextHandler = (event) => {
        console.log(event.target.value)
        //* passing info: set this text to our event value
        setInputText(event.target.value)
    }
    //? submit button link to your ToDO list 
    const submitTodoHandler = (event) => {
        event.preventDefault() 
        //? this will create new todos when you click & defaults
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        //? this will clear the inputText state
        setInputText("");
    };

    //? Filter Button - 
    const statusHandler = (event) => {
        setStatus(event.target.value)
    }

    //* webpage ready to be sent back to App()+ use the handlers above! 
    return (
      <form>
          <input 
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" 
            value={inputText}
          />
          <button onClick={submitTodoHandler} className="todo-button" type="submit" >
              <i className="fas fa-plus-square" ></i>
          </button>
        
          <div className="select" >
              <select onChange={statusHandler} name="todos" className="filter-todo" >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="incomplete">incomplete</option>
              </select>
          </div>
      </form>  
    )
}

export default Form