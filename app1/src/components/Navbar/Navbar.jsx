import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from 'react-router-dom';
import style from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={` ${style.bg} navbar navbar-expand-lg py-4 fixed-top navbar-dark`}>
            <div className="container">
                <Link className={`${style.brandStyle} navbar-brand`} to={""}>START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={`${style.linkStyle} nav-link`} to={"about"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`${style.linkStyle} nav-link`} to={"catalog"}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`${style.linkStyle} nav-link`} to={"contact"}>Contact us</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
