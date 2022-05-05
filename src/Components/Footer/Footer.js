import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white bg-dark">
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Chaquetas Negras
            </h6>
            <p>
              Chaquetas negras es una comunidad internacional dedicada a la capacitación de profesionales masoterapeutas, estudiantes de masoterapia y todos aquellos emprendedores que quieran ingresar al apasionante mundo de la sanación con técnicas no invasivas. Yo José Luis Córdoba, los invito a participar en nuestra comunidad y llevar este conocimiento ancestral al siguiente nivel.
              Los espero...
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Links
            </h6>
            <p>
                <NavLink className="text-white" to="/" >Inicio</NavLink>
            </p>
            <p>
                <NavLink className="text-white" to="/services" >Servicios</NavLink>
            </p>
            {
            /*  <p>
                <NavLink className="text-white" to="/products" >Productos</NavLink>
            </p>*/
            }
            <p>
                <NavLink className="text-white" to="/contact" >Contacto</NavLink>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
            <p><FontAwesomeIcon className="me-3" icon={ faHome } /> Mar del Plata, Argentina</p>
            <p><FontAwesomeIcon className="me-3" icon={ faEnvelope } /> chaquetasnegraslife@gmail.com</p>
            <p><FontAwesomeIcon className="me-3" icon={ faPhone } /> + 54 9 2233 01-3828 </p>
          </div>
        </div>
      </section>

      <hr className="my-3" />

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
                ©2022 Chaquetas negras
            </div>
          </div>

          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a href="https://www.facebook.com/chaquetasnegras.joseluiscordoba" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1 text-white" role="button">
            <FontAwesomeIcon icon={ faFacebook } />
            </a>

            <a href="https://www.youtube.com/channel/UCe3LphJXNhRBJMyMJNUnQyg/featured" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1 text-white" role="button">
            <FontAwesomeIcon icon={ faYoutube } />
            </a>

            <a href="https://www.instagram.com/chaquetas_negras" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1 text-white" role="button">
            <FontAwesomeIcon icon={ faInstagram } />
            </a>
          </div>
        </div>
      </section>
    </div>
  </footer>
  )
}

export default Footer