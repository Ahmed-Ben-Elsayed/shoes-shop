import React from 'react'
import { Category } from './category/Category'
import { Price } from './price/Price'
import Color from './color/Color'
import '../sidebar/sidebar.css'
export const Sidebar = ({sn, Allc,black,green ,white, red,blue  ,over,hunderdTo150,All,fiftyTohunderd,zTofifty ,sandl , Flats , heels,all  }) => {
    return (
        <div className='sidebar'>
             <Category sandl={sandl}Flats ={Flats} heels={heels} all={all} sn={sn}/>
            <Price All={All} over={over} hunderdTo150={hunderdTo150} fiftyTohunderd={fiftyTohunderd} zTofifty={zTofifty} />
            <Color Allc={Allc} black={black} blue={blue} red={red} white={white} green={green} />
        </div>
    )
}

