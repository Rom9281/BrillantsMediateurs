import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the CSS file directly from the node_modules folder

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
