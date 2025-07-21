// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header';
import Todos from './MyComponents/todos';
import Addtodo from './MyComponents/addtodo'
import Footer from './MyComponents/footer';
import { useState, useEffect } from 'react';
// import { uuid } from 'uuidv4';

function App() {
  // Checking if local storage alredy created or not if not then creact one
  let initTodo;
  if(localStorage.getItem("todo") === null){
    initTodo = [];
  }
  else{
    // useEffect(()=>{

      initTodo = JSON.parse(localStorage.getItem("todo"));

    // })
  }


  // let initdone;
  // if(localStorage.getItem("done") === null){
  //   initdone = 0;
  // }
  // else{
  //   initTodo = JSON.parse(localStorage.getItem("done"));
  // }


  const add = (titl, dec) => {
    if(titl.length > 25){
      alert("Title must be less than 25 char!");
      return;
    }
    if (!titl) {
      alert("Title can not be empty!");
      return;
    }
    let Sno = todo.length + 1;
    const newtodo = {
      id: Date.now(),
      sno: Sno,
      title: titl,
      desc: dec,
      clicked:false
    }
    // setTodo([...todo, newtodo]); -> pushes to back
    setTodo([newtodo, ...todo]);// unshift newtodo i.e add in front
    // console.log(Sno);
    localStorage.setItem("todo", JSON.stringify(todo));

  }

  const setClk = (idd) => {
  const updated = todo.map((itm) =>{
  return itm.id === idd ? { ...itm, clicked: !itm.clicked} : itm}
);
  // const list = updated.filter((itm)=>{
  //     return itm.clicked === true;
  //   })
    // let add = 0
    // setDone(add)

  // setDone(add)
  setTodo(updated);
  localStorage.setItem("todo", JSON.stringify(todo));
  // localStorage.setItem("done", JSON.stringify(done));
};


  const del = (item) => {
    console.log("item deleted", item.title);
    setTodo(todo.filter((e) => {// used for live deletion of the objects in the DOM
      return e !== item;
    }))
    // const list = todo.filter((itm)=>{
    //   return itm.clicked === true;
    // })
    // let add = 0
    // setDone(add)
    localStorage.setItem("todo", JSON.stringify(todo));
    // localStorage.setItem("done", JSON.stringify(done));
  }

  const [todo, setTodo] = useState(initTodo)// Creating a todo array with a hook setTodo for live deletion and local storage
// For properly strogin the updated item and then calling the locastorage setItem
// const [done, setDone] = useState(initdone)


useEffect(()=>{
  localStorage.setItem("todo", JSON.stringify(todo))
}, [todo]);


// useEffect(()=>{
//   localStorage.setItem("done", JSON.stringify(done))
// }, [done]);



  return (
    <>
      <Header searchBar={false} />
      <div id='add'>

      <Addtodo Add={add} />
      </div>
      <Todos todo={todo} del={del} setClick = {setClk}/>
      <Footer />
    </>
  );
}

export default App;
