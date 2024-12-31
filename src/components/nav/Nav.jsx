import React from "react";
import './nav.css';
import puma from '../../assets/puma.jpg'
import search from '../../assets/search.png'
import like from '../../assets/heart.png'
import cart from '../../assets/shopping-cart.png'
import account from '../../assets/user.png'
import { Link, Outlet } from "react-router-dom";

const Nav = ()=>{
    return(
        <>
            <nav className="Navbar">
                <div className="Navmain">
                <div className="Navlinks">
                    <img src={puma} alt="" />
                    <p>New</p>
                    <p>Women</p> 
                    <Link to='/mens'><p>Men</p></Link>
                    <p>Kids</p>
                    <p>Motorsports</p>
                    <p>Collaborations</p>
                    <p>Sports</p>
                    <p>Sale</p>
                    <p>Palermo</p>
                </div>
                </div>
                <div className="NavSearch">
                    <img src={search} alt="" />
                    <p>SEARCH</p>
                </div>
                <div className="NavIcons">
                    <img src={like} alt="" />
                    <img src={cart} alt="" />
                    <img src={account} alt="" />
                </div>
            </nav>
                <Outlet/>
        </>
    )
}

export default Nav