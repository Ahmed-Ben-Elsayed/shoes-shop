import React, { useEffect, useState } from 'react'
import '../products/products.css'
import '../../data'
import data from '../../data'
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoStar } from 'react-icons/io5'
import { Sidebar } from '../sidebar/Sidebar';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
export const Products = ({ addTocart }) => {

    let [products, setproducs] = useState([]);
    useEffect(function () {
        setproducs(data)
    }, [])
    // category
    function all() {
        setproducs(data)
    }
    function Flats() {
        setproducs(data.filter(item => item.category == "flats"))

    }
    function sn() {
        console.log(products);
        setproducs(data.filter(item => item.category == "sneakers"))
    }

    function sandl() {
        setproducs(data.filter(item => item.category == "sandals"))
    }
    function heels() {
        setproducs(data.filter(item => item.category == "heels"))
    }
    // price
    function All(){
        setproducs(data)
    }
    function zTofifty() {
        setproducs(data.filter(item => item.newPrice <= 50))
    }
    function fiftyTohunderd() {
        setproducs(data.filter(item => item.newPrice >50 && item.newPrice <= 100));

    }
    function hunderdTo150() {
        console.log(products);
        setproducs(data.filter(item => item.newPrice > 100 && item.newPrice <=150 ))
    }

    function over() {
        setproducs(data.filter(item => item.newPrice > 150))
    }
    // color 
    function Allc(){
        setproducs(data)
    }
    function black() {
        setproducs(data.filter(item => item.color == "black"))
    }
    function blue() {
        setproducs(data.filter(item => item.color=="blue"));

    }
    function red() {
        console.log(products);
        setproducs(data.filter(item => item.color=="red"))
    }

    function green() {
        setproducs(data.filter(item => item.color=="green"))
    }
    function white() {
        setproducs(data.filter(item => item.color=="white"))
    }
    function slide(){
        document.querySelector('.side').classList.toggle("slide");
        console.log("ahmed");
    }
    return (
        <div className='products'>
            <section className='produc pro'>
                {products.map(function (item) {
                    return (
                        <div className='product'>
                            <img src={item.img} alt="" />
                            <h3>{item.title.slice(0, 11)}...</h3>
                            <small>{item.category}</small>
                            <div className='stars'>
                                <IoStar className='star' />
                                <IoStar className='star' />
                                <IoStar className='star' />
                                <IoStar className='star' />
                                <IoStar className='star' />
                                <p>{item.reviews}</p>
                            </div>
                            <div className='price'>
                                <del>{item.prevPrice}</del>
                                <h4>${item.newPrice}</h4>
                                <BsFillCartPlusFill onClick={() => addTocart(item)} className='cart' />
                            </div>
                        </div>
                    )
                })}
            </section>
            <section className='side'>
                <Sidebar  over={over} blue={blue} Allc={Allc} black={black} red={red} white={white} green={green} All={All} zTofifty={zTofifty} hunderdTo150={hunderdTo150} fiftyTohunderd={fiftyTohunderd} all={all} heels={heels} sandl={sandl} Flats={Flats} sn={sn} className="sidee" />
            </section>
        </div>

    )
}