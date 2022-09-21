import React from "react"

const Todo = ({ text, todo, todos, setTodos }) => {
    // Events deleteHandler - modifying the state
    const deleteHandler = (event) => {
        event.preventDefault()
        //* all the todos, filter out 
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    // Completed Handler 
    // if the itemid is the same as todo.id 
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed 
                }
            }
            return item
        }))
    }

    return (
        // basic styling for the buttons check & trash
        <div className="todo" >
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn" >
                <i className="fas fa-check"></i>    
            </button>
            <button onClick={deleteHandler} className="trash-btn" >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo