import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './components/layout/Layout'
import Cart from './components/cart/Cart'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index:"true",
          element:<Home/>,

        },
        {
          path:"cart",
          element:<Cart/>,

        },
      ]
    },
  ]);
  return <RouterProvider router={router} />;

}

export default App
