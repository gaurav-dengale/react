import { useState } from 'react'
import ContextProvider from './context/ContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'


function App() {


  return (
    <ContextProvider>
      <h1>Welcome to ContextProvider </h1>
      <Login/>
      <Profile/>
    </ContextProvider>

  )
}

export default App
