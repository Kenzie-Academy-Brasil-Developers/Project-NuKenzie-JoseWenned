import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeContext } from './providers/index.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <App />
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>,
)
