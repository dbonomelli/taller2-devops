import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CarroContainer } from '../containers/CarroContainer'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg  bg-primary">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/productos" >Tienda pulenta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" activeClassName="active"  to="/productos">Home</NavLink>
                        <NavLink className="nav-link" activeClassName="active"  to="/producto/agregar">Agregar Producto</NavLink>
                    </div>
                </div>
                <form class="d-flex">
                    <CarroContainer></CarroContainer>
                </form>
            </div>
        </nav>


    )
}
