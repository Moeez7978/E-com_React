import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home"
import Contact from "./Contact"
import Cart from "./Cart"
import './App.css'
import Products from './Products'
import SingleProduct from './SingleProduct'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
        

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
