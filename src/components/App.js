
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let[username,setUsername]=useState("")
  let[pass,setPass]=useState("")
  let[err,setErr]=useState("")
  function change(e){
    if(name==="" || pass===""){
      setErr("Both the username and password required")
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}> </input>
     <input type="pass" value={pass} onChange={(e)=>setPass(e.target.value)}> </input>
     { err && <p id="errorMessage">{err}</p>
       <button onClick={change}>Login</button>
    </div>
  )
}

export default App
