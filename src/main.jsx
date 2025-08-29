import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider} from './productContext.jsx'
import { CartProvider } from './CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <CartProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
  
  </StrictMode>,
)
