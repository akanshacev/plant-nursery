import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Contextapi from './contextApi/Contextapi.jsx'
import AuthContext from './contextApi/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <Contextapi>
          <App />
        </Contextapi>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>,
)
