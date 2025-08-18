import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home"
import Contact from "./Contact"
import Cart from "./Cart"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
