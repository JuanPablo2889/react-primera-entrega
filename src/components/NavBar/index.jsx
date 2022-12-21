import React from "react";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="/">
                        Packaging Express
                    </a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="/categoria/inicio">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a className="nav__link" href="/categoria/productos">
                            Productos
                        </a>
                    </li>
                    <li>
                        <a className="nav__link" href="cart">
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
