>>>>>>> Awais_branch
import './App.css'
import About from "./About"
import Products from "./Products"
import SingleProduct from "./SingleProduct"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
=======
        <Routes>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Products" element = {<Products/>} />
        <Route path = "/SingleProduct/:id " element = {<SingleProduct/>} />


        </Routes>
        </BrowserRouter>
>>>>>>> Awais_branch
    </>
  )
}

export default App
