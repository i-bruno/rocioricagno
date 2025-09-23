import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./i18n.js" // importa el archivo de traducción
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
