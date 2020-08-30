import React from 'react'
import Logo from '../logo2.svg';
import './footer.css'
const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <a className="navbar-brand f-logo">
                        <img src={Logo} style={{ width: '80px' }} />
                    </a>
                </div>
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-sm">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark" >About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" >Press</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" >Copyright</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" >Advertise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" >Help</a>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                    <nav className="navbar navbar-expand-sm">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" >&nbsp;&nbsp;Copyright 2016 ayz@mail.com</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-4">

                    <nav className="navbar navbar-expand-sm">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" ><i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" ><i class="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" ><i class="fa fa-google-plus" aria-hidden="true"></i>
                                </a>
                            </li>

                        </ul>
                        <div className="dropdown">
                            <button className="btn btn-link active text-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Language
                </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" >&nbsp;   English</a>
                                <a className="dropdown-item" >&nbsp;   Spain</a>
                                <a className="dropdown-item" >&nbsp;   Marathi</a>

                            </div>
                        </div>
                    </nav>


                </div>
            </div>
        </div>
    )
}

export default Footer
