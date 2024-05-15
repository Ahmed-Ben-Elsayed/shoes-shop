import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/navbar/Navbar'
import { Sidebar } from './Components/sidebar/Sidebar'
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import { Cart } from './Components/cart/Cart'
import { Home } from './Components/Home'
import data from './data'
import { Products } from './Components/products/Products'
// File2.jsx

function App({all}) {
  const [count, setCount] = useState(0)
  let [cart,setcart] = useState([]);
  //  add to cart
  function addTocart(product){
    let seleteditem = cart.find(item => item.id == product.id)
    if(seleteditem){
      setcart(cart.map(item => item.id == product.id ? {...seleteditem , qty : seleteditem.qty+1 } : item ))
    }
    else{
      setcart([...cart ,{...product , qty : 1}])
    }
    console.log(cart);
    // console.log(seleteditem.qty);
    
  }
  // removeFromcart
  function removeFromcart(product){
    setcart(cart.filter(item=> item.id != product.id))
  }
  // decrease
  function decrease (product){
    let seleecteditem = cart.find(item=> item.id == product.id)
    if(seleecteditem.qty==1){
      setcart(cart.filter(item=> item.id != product.id))
    }
    else{
      setcart(cart.map(item=> item.id == product.id ? {...seleecteditem,qty:seleecteditem.qty-1}: item))
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar cart={cart}/> 
    <Routes>
      <Route path='/' element={<Products   addTocart={addTocart} />}/>
      <Route path='/cart' element={<Cart decrease={decrease} addTocart={addTocart} removeFromcart={removeFromcart} cart={cart}/>}/>
      <Route path='/pro' element={<Products addTocart={addTocart}/>}/>
      
    </Routes>
    </BrowserRouter>
       </>
  )
}

export default App
