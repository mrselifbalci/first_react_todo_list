import React, { Component } from 'react'
import Todo from './components/Todo'
import AddTodo from "./components/AddTodo";
import uuid from 'react-uuid'
import Header from './components/Header'

class App extends Component {
    state = {
        todos: [
            
        ]
    }

    markComplete = (id) => {
        this.setState(this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
        }))
    }

    deleteTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    addTodo = (value) => {
        const newTodo = {
            id: uuid(),
            title: value,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    render() {
        return (
            <div>
              <Header />
                <AddTodo addTodo={this.addTodo}/>
               <Todo todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}
export default App