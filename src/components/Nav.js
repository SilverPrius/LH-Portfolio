import '../components/nav.css'

import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/projects">
                <div>Projects</div>
            </Link>
            <Link to="/contact">
                <div>Contact</div>
            </Link>
        </div>
    )
}