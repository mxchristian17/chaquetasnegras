import React from 'react'
import Service from '../Service/Service'

const Services = () => {
  return (
    <section className="container-fluid m-0 p-0">        
        <Service
          title="Seminarios de masajes"
          img="assets/service1.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat purus lobortis rutrum blandit. Vivamus pharetra erat id risus viverra sodales a nec ante."
        />
        <Service
          title="Cursos de masajes descontracturantes"
          img="assets/service2.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat purus lobortis rutrum blandit. Vivamus pharetra erat id risus viverra sodales a nec ante."
        />
        <Service
          title="Seminarios de masoterapia"
          img="assets/service3.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat purus lobortis rutrum blandit. Vivamus pharetra erat id risus viverra sodales a nec ante."
        />
        <Service
          title="Cursos web"
          img="assets/service4.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat purus lobortis rutrum blandit. Vivamus pharetra erat id risus viverra sodales a nec ante."
        />
    </section>
  )
}

export default Services