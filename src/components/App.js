
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let[username,setUsername]=useState("")
  let[pass,setPass]=useState("")
  let[err,setErr]=useState("")
  function change(e){
    if(!username || !pass){
      setErr("Both the username and password required")
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}> </input>
     <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}> </input>
     { err && <p id="errorMessage">{err}</p> }
       <button onClick={change}>Login</button>
    </div>
  )
}

export default App;
