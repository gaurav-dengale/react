// In main.jsx

import React from 'react' // <-- 1. ADD THIS LINE
import ReactDOM from 'react-dom/client' // <-- You only need this import
// import { createRoot } from 'react-dom/client' // <-- 2. REMOVE THIS REDUNDANT LINE
import './index.css'
import App from './App.jsx'

// 3. FIX THE FUNCTION CALL
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)