import React from 'react'
import Todoitem from './todoitem'

const todos = ({todo, del}) => {
  return (
    <>
  
    <div className='container'>

    <h3 id='text'>To Do List</h3>
    <p id = 'text'>Total:{todo.length}</p>
    
      {// an if statement
      todo.length !== 0?
      todo.map((obj)=>{
        return <Todoitem task = {obj} key = {obj.sno} del = {del}/>
        
      }
    
    ):<p id = "text"> No ToDos to display</p>
    }

    </div>

    </>
  )
}

export default todos
