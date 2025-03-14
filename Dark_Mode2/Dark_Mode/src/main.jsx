import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProviderFunction } from './context/Themecontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeContextProviderFunction>
  <App />
  </ThemeContextProviderFunction>
  </BrowserRouter>,
)
