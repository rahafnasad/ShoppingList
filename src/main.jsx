import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CartContextProvider} from './context/cartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <React.StrictMode>
    <App />
    <ToastContainer/>

  </React.StrictMode>
  </CartContextProvider>
  ,
)
