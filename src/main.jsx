import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom'; 
import App from './App.jsx';
import './index.css';
// import createRoot from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
