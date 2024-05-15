import React from 'react'
import '../category/category.css'
export const Category = ({sn,heels,all,Flats,sandl}) => {
    return (
        <div className='category'>
            <h3>Category</h3>
            <label htmlFor="">
                <input onClick={all} type="radio" name='test1' />
                <span onClick={all} className='checkmark'></span>
                All
            </label>
            <label  htmlFor="">
                <input  onClick={sn}   type="radio" name='test1' />
                <span onClick={sn}  className='checkmark'></span>
                Sneakers
            </label>
            <label htmlFor="">
                <input onClick={Flats} type="radio" name='test1' />
                <span onClick={Flats} className='checkmark'></span>
                Flats
            </label>
            <label htmlFor="">
                <input onClick={sandl} type="radio" name='test1' />
                <span onClick={sandl} className='checkmark'></span>
                Sandels
            </label>
            <label htmlFor="">
                <input onClick={heels} type="radio" name='test1' />
                <span onClick={heels} className='checkmark'></span>
                Heels
            </label>
        </div>
    )
}
