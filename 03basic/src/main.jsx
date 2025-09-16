import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card1 from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card1/>
  </StrictMode>,
)
