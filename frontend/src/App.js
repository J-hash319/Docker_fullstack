import { useState } from 'react';

function App() {
  const [name,setName]=useState("");

  const send=()=>{
    fetch("http://localhost:5000/user",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name})
    });
  }

  return (
    <div>
      <h1>Docker Fullstack</h1>
      <input onChange={e=>setName(e.target.value)}/>
      <button onClick={send}>Send</button>
    </div>
  );
}
export default App;