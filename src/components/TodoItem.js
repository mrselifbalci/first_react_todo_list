import React, { Component } from 'react'

class TodoItem extends Component {

    getStyle = () => {
        return {
         background: '#f4f4f4',
         padding: '10px',
         borderBottom: '1px #ccc dotted',
         textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    btnstyle = {
        background: 'red',
        padding: '9px',
        border: 'none',
        color: 'white',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                <input 
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, this.props.todo.id)}
                />
                {' '}
                {this.props.todo.title}
                <button style={this.btnstyle} onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}>x</button>
                </p>
            </div>
        )
    }
}

export default TodoItem
