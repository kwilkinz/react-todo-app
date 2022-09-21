import React from "react"
//*import from components 
import Todo from "./Todo.js"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    
    // get state from user - for every todo we have render a Todo
    return (
        <div className="todo-container" >
            <ul className="todo-list" >
                {filteredTodos.map((todo) => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos} 
                    /> 
                ))}
            </ul>
        </div>
    );
}

export default TodoList