import React from 'react'
import { IoCart, IoSearch } from "react-icons/io5";
import '../navbar/navbar.css'
import { Link } from 'react-router-dom';
import { AiOutlineMenuUnfold } from "react-icons/ai";
export const Navbar = ({cart,Snekers}) => {
    return (
        <nav>
            <Link to="/">
            <h1 className='logo'>Shoes</h1>
            </Link>
            <div className='search'>
            <input type="text" placeholder='search' />
            <IoSearch onClick={ Snekers} className='IoSearch' />
            </div>
            <div className='ccart'>
           <Link to='/cart' ><IoCart className='nav-cart'/>
           </Link>
             <span>{cart.length}</span>
            </div>
        </nav>
    )
}
