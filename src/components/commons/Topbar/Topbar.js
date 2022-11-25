import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../basics/Logo/Logo';

import './Topbar.scss'


export default function Topbar({styleNav=true}) {

    return (
        <div>
            <nav id='nav' className={styleNav ? "navbar navbar-expand-lg bg-light  topbar":"navbar navbar-expand-lg bg-light  topbar2"}>
                <div className="container-fluid">
                    <Link to={"/"} style={{textDecoration: 'none'}}>
                        <Logo />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className=" nav-link">
                                <a className="nav-link link-topbar" href="#">Especialidades médicas</a>
                            </li>
                            <li className=" nav-link">
                                <a className="nav-link link-topbar" href="#">Cartilla</a>
                            </li> 
                            <li className=" nav-link">
                                <a className="nav-link link-topbar" href="#">Quiero ser parte</a>
                            </li>
                            <li className=" nav-link">
                                <a className="nav-link link-topbar" href="#">Conocenos</a>
                            </li>
                        </ul>
                        <button type="button" className="button-standar-01 button-topbar">Iniciar sesión </button>
                    </div>
                    
                </div>
            </nav>
        </div>
    );
}

