import React from 'react'
import Service from '../Service/Service'

const Services = () => {
  return (
    <section className="container-fluid m-0 p-0">        
        <Service
          title="SEMINARIOS DE ALTA CAPACITACION EN MASAJES"
          img="assets/service1.jpg"
          description="Destinado a los Profesionales del Masajes en distintas areas , Terapeutico, Estetico, Spa, Deportivo, Holistico."
        />
        <Service
          title="Curso en Masajes"
          img="assets/service2.jpg"
          description="Curso de Masajista Profesional en Masajes Terapéuticos, Estético, Spa, Deportivo y Holístico."
        />
        <Service
          title="Talleres de Nivelación para Homologar Certificaciónes"
          img="assets/service3.jpg"
          description="Aulas Presenciales u Online para Homologación de Certificaciones expedidas por otras Entidades, donde se dictara cursos de nivelación de técnicas compatibles con nuestra Institución."
        />
        <Service
          title="Certificación de Aptitud para ejercer Masajes Spa"
          img="assets/service4.jpg"
          description="Certificación para Profesionales del Masaje Spa exigidos en los centros de Spa , termales, Hoteles y centros de Relax."
        />
        <Service
          title="Asesor en confección de Gabinete de Masajes"
          img="assets/service4.jpg"
          description="Falta descripción de servicio por el momento..."
        />
    </section>
  )
}

export default Services