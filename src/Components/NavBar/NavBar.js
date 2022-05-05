import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-3 border-dark">
        <div className="container-fluid">
            <Link className="navbar-brand px-4 py-0" to="/">
            <img src="Logo-156x50.png" alt="Chaquetas negras" width="156" height="50" className="d-inline-block align-text-top" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" to="/" >Inicio</NavLink>
                <NavLink className="nav-link" to="/services" >Servicios</NavLink>
                {
                //  <NavLink className="nav-link" to="/products" >Productos</NavLink>
                }
                <NavLink className="nav-link" to="/contact" >Contacto</NavLink>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar