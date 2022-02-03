import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container-fluid my-4 mainNavigation">
            <div className="row">
                <div className="col-3 navName">
                    <Link to="/">
                        <h4>J-Squared Studios</h4>
                    </Link>

                </div>
                <div className="col-9">
                    <nav className="navlinks">
                        <Link to="/#">Portfolio</Link>
                        <Link to="/#">Services</Link>
                        <Link to="/about">About</Link>
                        <Link to="/#">Contact</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Navbar;