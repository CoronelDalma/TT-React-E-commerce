import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Layouts/Header/Header'
import { Footer } from './Layouts/Footer/Footer'
import { Home } from './pages/Home/Home'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import './index.css'
import './App.css'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './pages/Cart/Cart'

function App() {
  useEffect(() => {
    document.body.className = "theme-mystic"; 
  }, [])

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path='/' element={<Home greeting={'Bienvenido a Lairen E-commerce'} />} />
              {/* <Route path='/category/:id' element={<Category />} /> */}
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
