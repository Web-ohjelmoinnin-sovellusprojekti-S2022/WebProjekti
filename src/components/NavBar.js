import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logout from "../pages/Logout";





const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg -navbarlight">
            <a className="navbar-brand" href="/">Gonacompany kaaviot</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/about">Tietoa</Link>
                    <Link className="nav-link" to="/logout"onClick={Logout}>Kirjaudu Ulos</Link>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Kaaviot
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="/globaltemp">Lämpötilakaaviot</a></li>
                            <li><a className="dropdown-item" href="/emission">Päästökaaviot</a></li>
                            <li><a className="dropdown-item" href="/customview">Luo oma näkymä</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar