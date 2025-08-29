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
import ErrorPage from './ErrorPage'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='E-com_React'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>

        <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
        <Route path="*" element={<ErrorPage/>}/>

        <Route path="/About" element={<About/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
        


      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
