import React from 'react'
import './newVideos.css'
const newVideos = () => {
    return (
        <div className="container">
            <div className="help">
                <nav className="navbar navbar-expand-md">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-danger" >New Videos in India</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" >Most Viewed</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" >Featured in Last Week</a>
                        </li>
                    </ul>
                </nav>
                <div className="dropdown ddown2">
                    <button className="btn btn-link active text-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by
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
                    <div className="card border-light">

                        <div className="card-body">

                            <p className="stamp text-light" >3:50</p>
                        </div>
                        <h6 className="card-title">Dil Bechara Trailer</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">

                        <div className="card-body">
                            <p className="stamp text-light" >3:50</p>
                        </div>
                        <h6 className="card-title">The Kapil Sharma Show</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">

                        <div className="card-body">
                            <p className="stamp text-light" >3:50</p>
                        </div>
                        <h6 className="card-title">Zakir Khan Stand-up Part2</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">

                        <div className="card-body">
                            <p className="stamp text-light" >3:50</p>
                        </div>
                        <h6 className="card-title">Assassin's Creed Unity</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card border-light">

                        <div className="card-body watched">
                            <p className="stamp text-light" >3:50</p>
                        </div>
                        <h6 className="card-title">Facts About Proxima Century</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">

                        <div className="card-body">
                            <p className="stamp text-light" >3:50</p>
                        </div>
                        <h6 className="card-title">Chainsmokers- Closure</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">

                        <div className="card-body">

                            <p className="stamp text-light" >3:50</p>


                        </div>
                        <h6 className="card-title">Galaxy S20 Review</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">

                        <div className="card-body watched">
                            <p className="stamp text-light" >3:50</p>
                        </div>
                        <h6 className="card-title">Tribute To Chester Bannington</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                </div>





            </div>
            <hr />
        </div>
    )
}

export default newVideos
