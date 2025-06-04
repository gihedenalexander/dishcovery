import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DishcoveryApp from './DishcoveryApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DishcoveryApp />
  </StrictMode>,
  
)
