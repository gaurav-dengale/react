import React,{useState , useContext} from 'react'
import Usercontext from '../Context/Usercontext'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(Usercontext);
    const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
}


  return (
    <div className="container">
      <h2>Login</h2>

      <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
      />

      <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
      />

      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login