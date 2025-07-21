
import Todoitem from './todoitem'
import React, { useState }from 'react';

const Todos = ({todo, del, setClick, clear}) => {

  let clr = todo.length

    const list = todo.filter((itm)=>{
      return itm.clicked === true;
    })

  // let list = newupd.filter((e)=>{
  //   return newupd.clicked === true;
  // })

  let done = list.length;
  let left = clr - done
  // const [idd, setIdd] = useState("textclear")

  return (
    <>
  
    <div className='container'>

    <h3 id='text'>To Do List</h3>
    <div id='tcont'>

    <p id = 'text'>Total:{todo.length} Done:{done}</p>
    <div id = {clr === 0?"textclearD":"textclear"}>
    {/* <p>Clear all</p> */}
    <button type="button" class="btn btn-link" id = 'textclear' onClick={()=>{clear()}}>Clear all</button>
    </div>

    </div>
    
      {// an if statement
      todo.length !== 0?
      todo.map((obj)=>{
        return <Todoitem task = {obj} key = {obj.id} del = {del} set = {setClick}/>
      }
    
    ):<>
    <p id = "text"> No ToDos to display</p>
    {/* {setIdd("textclearD")} */}
    </>
    }

    {/* {todo.length == 0?disableClear:""} */}

    </div>

    </>
  )
}

export default Todos
