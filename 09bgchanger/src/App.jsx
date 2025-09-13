import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          
          <button onClick={() => setColor("green")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'green', color: 'white' }}>Green</button>
          <button onClick={() => setColor("red")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'red', color: 'white' }}>Red</button>
          <button onClick={() => setColor("pink")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'pink' }}>Pink</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'blue', color: 'white' }}>Blue</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'yellow' }}>Yellow</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'purple', color: 'white' }}>Purple</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'orange' }}>Orange</button>
          <button onClick={() => setColor("teal")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'teal', color: 'white' }}>Teal</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'black', color: 'white' }}>Black</button>
          <button onClick={() => setColor("gray")} className='outline-none px-4 rounded-3xl py-1' style={{ background: 'gray', color: 'white' }}>Gray</button>

        </div>
      </div>
    </div>
  );
}

export default App;
