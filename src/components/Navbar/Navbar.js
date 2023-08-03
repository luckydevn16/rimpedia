import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
            <Link to="/" className="fs-2 navbar-brand">
                Rick and Morty <span className="text-primary">Pedia</span> 
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <style jsx="true">
                    {`
                        button[aria-expanded="false"] > .close {
                            display: none;
                        }
                        button[aria-expanded="true"] > .open {
                            display: none;
                        }
                    `}
                </style>
                
                <i className="fas fa-bars open fw-bold text-dark"></i>
                <i className="fas fa-times close fw-bold text-dark"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav fs-5">
                    <li className="nav-item">
                        <NavLink activeclassname="active" to="/" className="nav-link">Characters</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/location" className="nav-link">Location</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;