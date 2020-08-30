import React from 'react'
import './popularChannel.css'
const popularChannel = () => {
    return (
        <div className="container">
            <div className="help">
                <nav className="navbar navbar-expand-md">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-danger" >Popular Channel</a>
                        </li>


                    </ul>
                </nav>
                <div className="dropdown ddown2">
                    <button className="btn btn-link active text-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More
                </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" ><i className="fa fa-sort" aria-hidden="true"></i>&nbsp;   Relevant</a>
                        <a className="dropdown-item" ><i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;   Recent</a>
                        <a className="dropdown-item" ><i className="fa fa-bar-chart" aria-hidden="true"></i>&nbsp;   Viewed</a>
                        <a className="dropdown-item" ><i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;   Top Rated</a>
                        <a className="dropdown-item" ><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;   Longest</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card-deck">

                    <div className="card card-c border-light">

                        <div className="card-body channel">


                        </div>

                    </div>
                    <div className="card card-c border-light">

                        <div className="card-body watched-c ">
                            <p className=" c-name text-light" >Ray Simpson</p>
                            <p className=" c-name text-light" ><i className="fa fa-heart" aria-hidden="true">&nbsp; 215K</i>
                            </p>
                        </div>


                    </div>
                    <div className="card card-c border-light">

                        <div className="card-body channel ">

                        </div>

                    </div>
                    <div className="card card-c border-light">

                        <div className="card-body channel">

                        </div>

                    </div>
                    <div className="card card-c border-light">

                        <div className="card-body channel">

                        </div>

                    </div>
                    <div className="card card-c border-light">

                        <div className="card-body channel">

                        </div>

                    </div>
                </div>

            </div>
            <div className="pag">
                <nav>
                    <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                        <li className="page-item"><a className="page-link" data-abc="true"><i className="fa fa-angle-left"></i></a></li>
                        <li className="page-item active"><a className="page-link" data-abc="true">1</a></li>
                        <li className="page-item"><a className="page-link" data-abc="true">2</a></li>
                        <li className="page-item"><a className="page-link" data-abc="true">3</a></li>
                        <li className="page-item"><a className="page-link" data-abc="true">4</a></li>
                        <li className="page-item"><a className="page-link" data-abc="true"><i className="fa fa-angle-right"></i></a></li>
                    </ul>
                </nav>
            </div>
            <hr />
        </div>
    )
}

export default popularChannel
