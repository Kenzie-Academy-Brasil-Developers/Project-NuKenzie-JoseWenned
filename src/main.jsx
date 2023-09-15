import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeContext } from './providers/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>,
)