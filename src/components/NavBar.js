import React, {useState} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {GiParrotHead} from "react-icons/gi";
import {AiFillShopping} from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import {BiSolidNotepad} from "react-icons/bi";
import {BiSupport} from "react-icons/bi";
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import {FaAppleAlt} from "react-icons/fa";

function NavBar(){
    const [click, setClick]=useState(false);
    const handleClick=() => setClick(!click);
    const closeMobileMenu=() =>setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <GiParrotHead className="navbar-icon"/>
                    AppleParrots
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? "nav-menu active": "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to = "/"className={({isActive}) =>"nav-links"+(isActive ? " activated": "")} onClick={closeMobileMenu}>
                            <AiFillHome className="navbar-icon"/>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = "/about"className={({isActive}) =>"nav-links"+(isActive ? " activated": "")}onClick={closeMobileMenu}>
                            <FaAppleAlt className="navbar-icon"/>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = "/orderdetails"className={({isActive}) =>"nav-links"+(isActive ? " activated": "")}onClick={closeMobileMenu}>
                            <BiSolidNotepad className="navbar-icon"/>
                            Order Details
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = "/customersupport"className={({isActive}) =>"nav-links"+(isActive ? " activated": "")}onClick={closeMobileMenu}>
                            <BiSupport className="navbar-icon"/>
                            Customer Suport
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = "/shop"className={({isActive}) =>"nav-links"+(isActive ? " activated": "")}onClick={closeMobileMenu}>
                            <AiFillShopping className="navbar-icon"/>
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default NavBar;