import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@fontsource-variable/geist-mono"
import "@fontsource-variable/outfit"
import "@fontsource/roboto"
import "@fontsource/jetbrains-mono"
import "@fontsource/ubuntu"
import "@fontsource/ibm-plex-mono"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
