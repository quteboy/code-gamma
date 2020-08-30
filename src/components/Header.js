import React, { Component } from 'react'
import Logo from '../logo2.svg';
import Avtar from '../avatar.png'
import '../components/Header.css'
export class Header extends Component {

    render() {
        return (
            <div className="main">
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand">
                        <img src={Logo} style={{ width: '60px' }} />
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-danger" >Popular</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" >Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" >Channels</a>
                        </li>
                    </ul>
                    {/* SearchBar */}
                    <form className="search col-md-6">
                        <div className="p-1 bg-light rounded rounded-pill">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button type="submit" className="btn btn-link text-secondary"><i className="fa fa-search"></i></button>
                                </div>
                                <input type="search" placeholder="Search" className="form-control border-0 bg-light" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-link text-secondary"><i className="fa fa-video-camera"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                    {/* SearchBar */}

                    <div className="dropdown ddown">
                        <a className="navbar-brand" >
                            <img src={Avtar} style={{ width: '50px' }} />
                        </a>
                        <button className="btn btn-link active text-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Riley
  </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" >Heather</a>
                            <a className="dropdown-item" >Augustas</a>
                            <a className="dropdown-item" >Will</a>
                        </div>
                    </div>

                </nav>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <p>Go to &nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa fa-heart-o secnav" aria-hidden="true"></i>
                                <i className="fa fa-clock-o secnav" aria-hidden="true"></i>
                                <i className="fa fa-product-hunt secnav" aria-hidden="true"></i>
                                <i className="fa fa-hourglass-end secnav" aria-hidden="true"></i></p>
                        </div>
                        <div className="col-md-6">
                            <i className="fa fa-play secnav text-secondary" aria-hidden="true">
                                &nbsp;&nbsp;&nbsp;&nbsp;Resume : DareDevil Season 2 Episode 3
                            </i>

                        </div>
                        <div className="col-md-3">
                            <i className="fa fa-th-large secnav text-secondary" aria-hidden="true"></i>
                            <i className="fa fa-tasks secnav text-secondary" aria-hidden="true"></i>


                        </div>

                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Header
