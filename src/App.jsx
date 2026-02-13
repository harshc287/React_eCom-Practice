import { useEffect, useReducer, useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.css';
import Products from './pages/Products'
import ProductsInfo from './components/ProductsInfo'
import { cartReducer, initialCartState } from './reducer/cartReducer'
import Card from './components/Card'
import Cart from './pages/Cart'

function App() {
  const [user , setUser] = useState(()=> {
    return JSON.parse(localStorage.getItem("user")) || null
  })
  const [cart, dispatch] = useReducer(cartReducer, initialCartState)




return (
<>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Login setUser= {setUser} />}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/dashboard' element ={<Dashboard user = {user}/>}/>
      <Route path='products' element ={<Products/>} />

      <Route path='/dashboard/:id' 
        element={<ProductsInfo dispatch= {dispatch}/>}/>

      <Route path='/cart' 
        element= {<Cart cart ={cart} dispatch= {dispatch} />} />

    </Routes>
    
    </BrowserRouter>
</>
  )
}

export default App
