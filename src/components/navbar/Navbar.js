import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="header-blue">
            <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tech soulay</a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Link</a></li>
                            <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li>
                        </ul>
                        <form className="form-inline mr-auto" target="_self">
                            <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search"></i></label><input className="form-control search-field" type="search" id="search-field" name="search"/></div>
                        </form>
                        <span className="navbar-text"> <a className="login" href="#">Log In</a></span>
                        <a className="btn btn-light action-button" role="button" href="#">Sign Up</a>
                         </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;