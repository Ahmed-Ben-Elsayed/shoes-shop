import React from 'react'
import '../color/color.css'
export default function Color({ Allc,black,green,blue ,white, red}) {
    return (
        <div>
             <div className='category'>
            <h3>Color</h3>
            <label htmlFor="">
                <input onClick={Allc} type="radio" name='test3' />
                <span onClick={Allc} className='checkmark all '></span>
                All
            </label>
            <label htmlFor="">
                <input onClick={black} type="radio" name='test3' />
                <span onClick={black} className='checkmark black'></span>
                Black
            </label>
            <label htmlFor="">
                <input onClick={blue} type="radio" name='test3' />
                <span  onClick={blue} className='checkmark blue'></span>
                Blue
            </label>
            <label htmlFor="">
                <input  onClick={red} type="radio" name='test3' />
                <span onClick={red} className='checkmark red'></span>
                Red
            </label>
            <label  htmlFor="">
                <input  onClick={green} type="radio" name='test3' />
                <span onClick={green} className='checkmark green'></span>
                Green
            </label>
            <label htmlFor="">
                <input  onClick={white} type="radio" name='test3' />
                <span onClick={white} className='checkmark white'></span>
                White
            </label>
        </div>
        </div>
    )
}
