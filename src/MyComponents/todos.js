import React from 'react'
import Todoitem from './todoitem'

const todos = ({todo, del, setClick}) => {
 

    const list = todo.filter((itm)=>{
      return itm.clicked === true;
    })

  // let list = newupd.filter((e)=>{
  //   return newupd.clicked === true;
  // })

  let done = list.length;

  return (
    <>
  
    <div className='container'>

    <h3 id='text'>To Do List</h3>
    <div id='tcont'>

    <p id = 'text'>Total:{todo.length} Done:{done}</p>
    </div>
    
      {// an if statement
      todo.length !== 0?
      todo.map((obj)=>{
        return <Todoitem task = {obj} key = {obj.id} del = {del} set = {setClick}/>
        
      }
    
    ):<p id = "text"> No ToDos to display</p>
    }

    </div>

    </>
  )
}

export default todos
