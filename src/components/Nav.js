import '../components/nav.css'

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="header">
            <Link to="/"><h1 className='logo'>LH</h1></Link>
            <ul className={click ? "nav-menu active" :
                "nav-menu"}>
                <li>
                    <Link to="/"><div>Home</div></Link>
                </li>
                <li>
                    <Link to="/about"><div>About</div></Link>
                </li>
                <li>
                    <Link to="/projects"><div>Projects</div></Link>
                </li>
                <li>
                    <Link to="/contact"><div>Contact</div></Link>
                </li>
            </ul>
            <div className='hamburger' onClick=
                {handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }
                } />) : (<FaBars size={20} style={{ color: "#fff" }
                } />)}


            </div>
        </div>
    )
}