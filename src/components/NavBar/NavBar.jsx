import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <header className="header">
                <Link to='/' className="logo">FLEXVYNE WEB</Link>
                <input type="checkbox" id="nav_check" hidden></input>
                <nav className="contenedor_hamburguesa">
                    <ul>
                        <li>
                            <Link to="/" className="active">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/">Productos</Link>
                        </li>
                        <li>
                            <Link to="/nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/">Servicios</Link>
                        </li>
                        <li>
                            <Link className="boton_login" to="/">Login</Link>
                        </li>
                        <CartWidget />
                    </ul>
                </nav>
                <label htmlFor="nav_check" className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
            </header>
        </div>
    );
};

export default NavBar;