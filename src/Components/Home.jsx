import React from 'react'
import { Sidebar } from './sidebar/Sidebar'
import { Products } from './products/Products'

export const Home = ({addTocart,sn}) => {
    return (
        <div className='home'>
            <Sidebar sn={sn}/>
            <Products   addTocart={addTocart}/>
        </div>
    )
}
