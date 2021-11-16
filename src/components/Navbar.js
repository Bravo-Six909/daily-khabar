import React, { useState } from 'react';
import { NavData } from './NavData';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className="navbar">
                <span className="open-icon" onClick={showSidebar}>
                    <FaAngleDoubleRight />
                </span>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <span className="close-icon">
                            <FaAngleDoubleLeft style={{fontSize: "2rem"}}/>
                        </span>
                    </li>
                    {NavData.map((item,index) => {
                        return(
                            <li className="navbar-list" key={index}>
                                <Link className="navbar-link" to={item.link}>
                                    <span className="nav-icon">{item.icon}</span>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
