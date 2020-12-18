import React from 'react'
import TodoItem from './TodoItem'

function Todo(props) {
     

    return (
        <div>
            {props.todos.map(todo => <TodoItem key= {todo.id}todo={todo} markComplete={props.markComplete} deleteTodo={props.deleteTodo}/>)}
        </div>
    )
}
export default Todo