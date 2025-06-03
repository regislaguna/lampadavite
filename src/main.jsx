import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lampada from "./components/Lampada.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lampada  msg={"Funcionou!!"}/>
  </StrictMode>,
)
