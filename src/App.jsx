import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home"
import Contact from "./Contact"
import Cart from "./Cart"
import About from "./About"
import Products from "./Products"
import Header from './components/Header'
import Footer from './components/Footer'
import SingleProduct from './SingleProduct'
import './App.css'

import ErrorPage from './ErrorPage'

import Products from './Products'
import SingleProduct from './SingleProduct'
import About from './About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
<<<<<<< HEAD
        <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<ErrorPage/>}/>
=======
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
        

>>>>>>> d5887c468ef3b420bd2de0a479654d1018ba67df
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
