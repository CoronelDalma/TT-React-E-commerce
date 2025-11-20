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
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from './Layouts/MainLayuot'
import { AdminLayout } from './Layouts/AdminLayout'
import { Login } from './components/Login/Login'
import {RutaProtegida} from './components/RutaProtegida/RutaProtegida'

function App() {
  useEffect(() => {
    document.body.className = "theme-mystic"; 
  }, [])

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="App">
            {/* <Header /> */}
            <Routes>
              <Route element={<MainLayout/>} >
                <Route path='/' element={<Home greeting={'Bienvenido a Lairen E-commerce'} />} />
                <Route path='/expansion/expansion' element={<Category />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
              </Route>

              <Route path='/admin' element={<AdminLayout />}>
                <Route index element={<Login />}/>
                <Route path='alta-productos' 
                  element={<RutaProtegida><ProductFormContainer />
                    </RutaProtegida>} />
              </Route>
            </Routes>
            {/*<Footer />*/}
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
