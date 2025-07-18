import React from 'react'

const todoitem = ({task, del}) => {
  return (
    <>
    <div className='todoitem my-3'>
      
      <hr></hr>
      <h4>{task.title}</h4>
      <p>{task.desc}</p>
      <button className="btn btn-outline-danger" onClick={()=>{del(task)}}>Delete</button>
        
    </div>
    </>
  )
}

export default todoitem
