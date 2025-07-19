
import React, { useState } from 'react';

const Todoitem = ({task, del, set}) => {
  // const divref = useRef(null);
  // const [clicked, setClick] = useState(false);

  return (
    <>
    <div className='todoitem my-3'>
      
      <hr></hr>
      <div id = "checkbox">
      <h4 id={`${task.clicked?'taskdone':'undone'}`}>{task.title}</h4>
       <button type="button" className={`btn${task.clicked?' btn-secondary':' btn-outline-secondary'}`} id={`${task.clicked?'tbtn':'btnn'}`} onClick={()=>{set(task.sno)}}>{task.clicked?'Reset':'Done'}</button>
      </div>
      <p id={`${task.clicked?'taskdone':'undone'}`}>{task.desc}</p>
      <button className="btn btn-outline-danger" onClick={()=>{del(task)}}>Delete</button>
        
    </div>
    </>
  )
}

export default Todoitem
