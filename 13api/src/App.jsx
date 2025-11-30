import React from 'react'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
        <div>App</div>
    </UserContextProvider>
  )
}

export default App