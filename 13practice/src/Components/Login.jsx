import React, { useState,useContext } from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleClick =(e) =>{
        e.preventDefault();
        setUser({username, password});
        

    }

    
  return (
    <div >
    <h2>login</h2>
    <input
    value={username}
    placeholder='username'
    onChange={(e)=>{setUsername(e.target.value)}}
    />
      <input
    value={password}
    placeholder='password'

    onChange={(e)=>{setPassword(e.target.value)}}
    />
    <button onClick={handleClick}>Submit</button>
    </div>

   

  )
}

export default Login