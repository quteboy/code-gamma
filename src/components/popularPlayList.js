import React from 'react'
import './popularPlayList.css'
const popularPlayList = () => {
    return (
        <div className="container">
            <div className="help">
                <nav className="navbar navbar-expand-md">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-danger" >Popular PlayList</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" >Recently Featured</a>
                        </li>
                        
                    </ul>
                </nav>
                <div className="dropdown">
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
                    
                    <div className="card card-d border-light">
                    <div className="play2"></div>
                    <div className="play"></div>
                        <div className="card-body playlist">
                        
                            <p className="stamp2 text-light" >8</p>
                        </div>
                        <h6 className="card-title">Uncharted 4 Walkthrought</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">
                    <div className="play2"></div>
                    <div className="play"></div>
                        <div className="card-body playlist">
                            <p className="stamp2 text-light" >10</p>
                        </div>
                        <h6 className="card-title">Doom 4 on low specs</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">
                    <div className="play2"></div>
                    <div className="play"></div>
                        <div className="card-body playlist">
                            <p className="stamp2 text-light" >25</p>
                        </div>
                        <h6 className="card-title">Arjit Singh All Songs</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                    <div className="card border-light">
                    <div className="play2"></div>
                    <div className="play"></div>
                        <div className="card-body playlist">
                            <p className="stamp2 text-light" >18</p>
                        </div>
                        <h6 className="card-title">Avici JukeBox</h6>
                        <p className="card-text"><small className="text-muted">{Math.floor(Math.random() * 10000000 + 1)} Views &nbsp; <i className="fa fa-circle-thin rating" aria-hidden="true"> &nbsp;{Math.floor(Math.random() * 94 + 1)}% </i>
                        </small></p>
                    </div>
                </div>






            </div>
            <hr />
        </div>
    )
}

export default popularPlayList
