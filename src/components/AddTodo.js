import React from 'react'

function AddTodo(props) {
    const onSubmit = (e) => {
        e.preventDefault()
        props.addTodo(document.getElementById('input').value)
        document.getElementById('input').value = ''
    }

    return (
        <form onSubmit={onSubmit} style={{display: 'flex'}}>
            <input 
                id="input"
                type="text"
                style={{flex: '10'}}
                placeholder="Add Todo..."
                
            />
            <input 
                className="btn"
                type="submit"
                value="Submit"
                style={{flex: '1'}}
            />
        </form>
    )
}
export default AddTodo