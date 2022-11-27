import React from 'react'; 

const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                        <a className="navbar-brand" href="http://localhost:3000/">
                            Videogames
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className='nav-item active'>
                                    <a className='nav-link' href='#'> </a>
                                </li>
                                <li className='nav-item active'>
                                    <a className='nav-link' href='http://localhost:3000/'>Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Search
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby='navbarDropdown'>
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <div classN ame='dropdown-divider'></div>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> 
                            </ul>
                            <div class='derecha'>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Logout</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;