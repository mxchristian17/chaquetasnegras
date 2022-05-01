import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section className="container px-0 mx-auto">
      <article className="pb-4">
        <Carousel
            showThumbs={ false }
            showStatus={ false }
            showIndicators={ false }
            dynamicHeight={ false }
            infiniteLoop={ true }
            autoPlay={ true }
            transitionTime={ 1000 }
            interval={ 5000 }
        >
            <div>
                <img alt="carrousel1" src="assets/img1.jpg" />
            </div>
            <div>
                <img alt="carrousel2" src="assets/img2.jpg" />
            </div>
            <div>
                <img alt="carrousel3" src="assets/img3.jpg" />
            </div>
        </Carousel>
      </article>
      <article className="pb-4 px-4">
        <h4 className="text-uppercase text-start text-md-center">¿Quienes somos?</h4>
        <p className="text-start text-md-center">
          Somos una comunidad internacional, con profesionales dedicados a la alta capacitación en masoterapia y masajes pre-post competición.<br />
          Valoramos la importancia de estudiar, formarse y capacitarse. Por eso estamos siempre trabajando para que como profesional, estés al mas alto nivel!
        </p>
      </article>
      <article className="pb-4 row px-4">
        <h5 className="text-start text-md-center">Nuestros servicios más reconocidos</h5>
        <div className="col-12 col-md-3 py-2 text-start text-md-center"><FontAwesomeIcon className="h5 align-middle" icon={ faSpa } /> Cursos de Masajes descontracturantes</div>
        <div className="col-12 col-md-3 py-2 text-start text-md-center"><FontAwesomeIcon className="h5 align-middle" icon={ faSpa } /> Seminarios de Masoterapia</div>
        <div className="col-12 col-md-3 py-2 text-start text-md-center"><FontAwesomeIcon className="h5 align-middle" icon={ faSpa } /> Seminarios de Masajes deportivos</div>
        <div className="col-12 col-md-3 py-2 text-start text-md-center"><FontAwesomeIcon className="h5 align-middle" icon={ faSpa } /> Cursos web de Masajes</div>
      </article>
    </section>
  )
}

export default Home