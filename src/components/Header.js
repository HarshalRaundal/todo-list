import React from 'react'
import Button from './Button'
const Header = ({showAddTask,show}) => {

    
    return (
        <header>
        <h1>ToDo List</h1>
        
        <Button text={show ?'close task':'add task'} showAddTask={showAddTask} show={show} />
        </header>
    )
}

export default Header
