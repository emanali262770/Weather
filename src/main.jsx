import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WetherContextData from './context/Mycontext/Mycontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WetherContextData>
    <App />
    </WetherContextData>
  </StrictMode>,
)
