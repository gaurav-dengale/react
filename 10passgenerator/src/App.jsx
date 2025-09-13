import React, { useState, useCallback } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [allowNumber, setNumber] = useState(false);
  const [allowCharacter, setCharacter] = useState(false);
  const [password, setPassword] = useState('');

  const passWordgenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (allowNumber) str += '0123456789';
    if (allowCharacter) str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, allowNumber, allowCharacter]);

  return (
    <div className='w-full max-w-md mx-auto shadow-lg rounded-xl px-8 py-10 my-12 text-white bg-gray-800 flex flex-col justify-center items-center'>
      <h1 className='text-white text-center mb-4 text-2xl font-bold'>Password Generator</h1>
      <div className='flex shadow-md overflow-hidden rounded-lg w-full mb-6'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-2 px-4 bg-gray-700 text-white text-lg'
          placeholder='Password'
          readOnly
        />
        <button
          className='ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-200'
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </button>
      </div>
      <div className='flex flex-col text-sm gap-x-2 w-full'>
        <div className="flex items-center gap-x-1">
          <input
            type='range'
            min={4}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={e => setLength(Number(e.target.value))}
          />
          <span className="ml-2">{length}</span>
        </div>
        <div className="flex items-center gap-x-2 mt-2">
          <label>
            <input
              type="checkbox"
              checked={allowNumber}
              onChange={e => setNumber(e.target.checked)}
              className="mr-1"
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={allowCharacter}
              onChange={e => setCharacter(e.target.checked)}
              className="mr-1"
            />
            Symbols
          </label>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition duration-200"
          onClick={passWordgenerator}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default App;
