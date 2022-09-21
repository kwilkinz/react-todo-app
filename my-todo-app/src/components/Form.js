import React from "react"

const Form = ({ setInputText }) => {
    // Write jsx code here & functions
    //? Connect app state to your textbox. 
    const inputTextHandler = (event) => {
        console.log(event.target.value)
        //* passing info: set this text to our event value
        setInputText(event.target.value)
    }

    //* webpage ready to be sent back to App()
    return (
      <form>
          <input onChange={inputTextHandler} type="text" className="todo-input" />
          <button className="todo-button" type="submit" >
              <i className="fas fa-plus-square" ></i>
          </button>
        
          <div className="select" >
              <select name="todos" className="filter-todo" >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="incomplete">incomplete</option>
              </select>
          </div>
      </form>  
    )
}

export default Form