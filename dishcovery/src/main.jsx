import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DischcoveryApp from './DischcoveryApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DischcoveryApp />
  </StrictMode>,
)
