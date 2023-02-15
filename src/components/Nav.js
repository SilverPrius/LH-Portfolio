import '../components/nav.css'

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <div className="header">
            <Link to="/" onClick={closeMobileMenu}><h1 className='lh-logo'>LH</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" onClick={closeMobileMenu}><div>Home</div></Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMobileMenu}><div>About</div></Link>
                </li>
                <li>
                    <Link to="/projects" onClick={closeMobileMenu}><div>Projects</div></Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMobileMenu}><div>Contact</div></Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    )
}