import { useState,useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [numberAllow, setNumber] = useState(false);
  const [characterAllow, setCharacter] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const passGenerator = useCallback(()=>{
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       let pass = "";
       if(numberAllow) str += '1234567890';
       if(characterAllow) str += '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length,numberAllow,setPassword,characterAllow])
  useEffect(()=>{passGenerator()},[length,numberAllow,characterAllow,passGenerator])

  const passwordRef = useRef(null);
  
  const passToCopy = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])



  
return (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212]">
      <div className="bg-gray-500 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Password Generator</h1>
        <div className="mb-4">
          <label className="block text-black font-medium mb-2">Password Length</label>
          <input
            type="number"
            min={8}
            max={32}
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 flex items-center bg-gray-300">
          <input
            type="checkbox"
            checked={numberAllow}
            onChange={e => setNumber(e.target.checked)}
            id="number"
            className="mr-2 accent-blue-500 bg-gray-400"
          />
          <label htmlFor="number" className="text-gray-700">Include Numbers</label>
        </div>
        <div className="mb-4 flex items-center bg-gray-300 p-2 rounded">
          <input
            type="checkbox"
            checked={characterAllow}
            onChange={e => setCharacter(e.target.checked)}
            id="character"
            className="mr-2 accent-blue-500"
          />
          <label htmlFor="character" className="text-gray-700">Include Special Characters</label>
        </div>
        <div className="mb-6 flex justify-center ite  ">
          <label className="  text-gray-700 font-medium mb-2">Generated Password</label>
          <div className=' flex block items-center'>
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-grow px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg text-white font-mono text-lg truncate focus:outline-none"
          />
          <button onClick    ={passToCopy}
            className='bg-blue-600 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-blue-700 transition duration-300'>Copy</button>
          </div>
        </div>
        
      </div>
    </div>
  </>
)

} 

export default App
