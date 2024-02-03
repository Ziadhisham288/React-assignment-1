
import React from 'react'
import About from './components/about/About'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './components/layOut/LayOut';
import Catalog from './components/catalog/Catalog';
import Contact from './components/contactUs/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/home/Home';

export default function App() {
  
  
  const router = createBrowserRouter([{
    path: "", element: <LayOut />, children: [
      { index: true, element: <Home/>},
      { path: "about", element: <About /> },
      { path: "catalog", element: <Catalog /> },
      { path: "contact", element: <Contact /> },
      ]
  }])


  return <RouterProvider router={router}/>
}
