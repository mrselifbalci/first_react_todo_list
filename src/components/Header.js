import React from 'react'

function Header() {

    const headerStyle = {
        background:'#333',
        color:'#fff',
        padding: '10px',
        textAlign:'center',
        marginBottom:'8px'
    }

    return (
        <div style={headerStyle}>
            <h1>TodoList</h1>
        </div>
    )
}
export default Header