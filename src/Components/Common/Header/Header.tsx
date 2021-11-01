import React, { FC } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { RoutePaths } from '../../../Constants/RoutePaths';

const Header: FC = () => {
    const history = useHistory();
    const scrollAction = () => {
        const section: any = document.querySelector('#about');
        const projects: any = document.querySelector('#projects');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        if (projects) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        history.push('/');       
        return; 
    };

    // const navigate = (event: any) => {
    //     console.log(event);
    //     // event.preventDefault();
    //     // history.push('/'); 

    //     window.location.replace("/#about");
    // }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <Link to={RoutePaths.HOME} className="navbar-brand">
                        <img src="../images/CCrayonCreed.png" alt="CrayonCreed" className="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ml-auto custom-navbar-nav">
                            <li className="nav-item">
                                <NavLink to={RoutePaths.HOME} exact className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" onClick={scrollAction} className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item">
                                {/* <NavLink to="/#about" onClick={navigate} className="nav-link">About Us</NavLink> */}
                                <a href="#about" onClick={scrollAction} className="nav-link">About Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu navmenu" aria-labelledby="navbarDropdown">
                                    <li className="navmenu-item"><NavLink to={RoutePaths.SERVICEGOLD} className="navmenu-link">Gold</NavLink></li>
                                    <li className="navmenu-item"><NavLink to={RoutePaths.SERVICESILVER} className="navmenu-link">Silver</NavLink></li>
                                    <li className="navmenu-item"><NavLink to={RoutePaths.SERVICEBRONZE} className="navmenu-link">Bronze</NavLink></li>
                                    <li className="navmenu-item"><NavLink to={RoutePaths.SERVICECUSTOM} className="navmenu-link">Custom</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
