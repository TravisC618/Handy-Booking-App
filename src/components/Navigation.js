import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import logo from '../img/logo.png'

const Navigation = props => {
    return (
        <nav className="navbar navbar-expand-md navbar-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                </a>
                <form className="form-inline">
                    <i className="fas fa-search" />
                    <input className="form-control mr-sm-2" type="search" placeholder="SEARCH BY POSTCODE" aria-label="Search"/>
                </form>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/details">Browse Handy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Login/ Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;