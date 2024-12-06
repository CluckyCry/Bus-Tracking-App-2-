import React from 'react'  // Add this import
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/common/Navbar'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
)