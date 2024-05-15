import React from 'react'
import "../cart/cart.css"
export const Cart = ({cart,removeFromcart,addTocart,decrease}) => {
    let total =0;
    return (
        <>
        <div className='Cart'>
       {cart.length == 0 ? <h1 className='empty'>the cart is empty </h1> :
            <div className='product-con'>
                {cart.map(function(product){
                    total+=product.newPrice*product.qty;
                    return(
                        <>
                        <div className='productt'>                            
                            <div>
                            <img src={product.img} alt="" />
                            <small>x{product.qty}</small>
                            </div>
                            <h4>{product.title.slice(0,10)}...</h4>
                            <div className='quntity'>
                                <button onClick={()=> addTocart(product)}>+</button>
                                <p>{product.qty}</p>
                                <button onClick={()=>decrease(product)}>-</button>
                            </div>
                            <button onClick={()=>removeFromcart(product)}>Remove</button>
                        </div>
                        
                        </>
                    )
                })}
            </div>
            }
            <h1 className='total'>total : {total.toString().slice(0,7)} $</h1>
        </div>
            </>
    )
}
