import React from 'react'

export const Price = ({fiftyTohunderd,over,All,hunderdTo150,zTofifty}) => {
    return (
        <div>
             <div className='category'>
            <h3>Price</h3>
            <label htmlFor="">
                <input onClick={All} type="radio" name='test2' />
                <span onClick={All} className='checkmark'></span>
                All
            </label>
            <label htmlFor="">
                <input onClick={zTofifty} type="radio" name='test2' />
                <span onClick={All} className='checkmark'></span>
                $0 - 50
            </label>
            <label htmlFor="">
                <input onClick={fiftyTohunderd} type="radio" name='test2' />
                <span onClick={fiftyTohunderd} className='checkmark'></span>
                $50 - 100
            </label>
            <label htmlFor="">
                <input onClick={hunderdTo150} type="radio" name='test2' />
                <span onClick={hunderdTo150} className='checkmark'></span>
                $100 - 150
            </label>
            <label htmlFor="">
                <input onClick={over} type="radio" name='test2' />
                <span onClick={over} className='checkmark'></span>
                over $150
            </label>
        </div>
        </div>
    )
}
