import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
   const [todo, setTodo] = useState([])
     const addtodo = ()=>{
      console.log("todo app");

      const todotext = document.getElementById("textInput").value
      console.log("todotext "+todotext);

      todo.push(todotext)
      setTodo([...todo])

     }
       console.log("length of todo vishal",todo.length)

  return (
 <div> 
     <h1>To-App</h1>
     <input id ="textInput"  type="text" placeholder="Add you todo here"></input>
      <button onClick={addtodo}>Add</button><br/>
     {
      todo.map(temptodo =>{
        return <div>{temptodo}</div>
      })
     }
    
     <br/>

    </div>
  );
}

export default App;
// step 1 create button and heading inside button for onclick buuton create method  give id inside text use inputid 
// step2 in function component not use state with the help of hook useState method inside arr todo and set 
// step 3 for todo push and settodo[...todo]
// ste4 map method for itter or display im screen which add dyanamic value todo.map inside return