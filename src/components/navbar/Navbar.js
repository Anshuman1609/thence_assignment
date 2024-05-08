import { useNavigate } from "react-router-dom";
import "./navbar.css";
import React from 'react'

const Navbar = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/form");
    }

    return (    
        <div className="navbar">
            <div className="navContainer">
                <button className="brunel navButton">Brunel</button>
                <div className="navItems">
                    <button onClick={handleNavigate} className="navButton a">Get Projects</button>
                    <button className="navButton b">Onboard Talent</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar