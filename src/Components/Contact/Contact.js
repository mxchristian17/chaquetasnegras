import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk, faInbox } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const [errors, setErrors] = useState({name : null, email : null})

    const [contact,  setContact] = useState({
        name:'',
        phone:'',
        email:'',
        status: false
    })

    const validateName = (value, err) => {
        err = ({...err, name : undefined})
        if(value.length > 100) err = ({...err, name : "El nombre es demasiado largo"})
        if(value.length < 7) err = ({...err, name : "Por favor ingrese un nombre y apellido válidos"})
        if (typeof value !== "undefined") {
            if (!value.match(/^[a-zA-Z ]+$/)) {
                err = ({...err, name : "El nombre solo debe contener letras y espacios"})
            }
        }
        if(value.length === 0) err = ({...err, name : "Por favor ingrese un nombre"})
        return err
    }
    
    const validateEmail = (value, err) => {
        err = ({...err, email : undefined})
        if(value.length > 100) err = ({...err, email : "El email es demasiado largo"})
        if(value.length < 7) err = ({...err, email : "Por favor ingrese una dirección de email válida"})
        if (typeof value !== "undefined") {
            if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                err = ({...err, email : "El email debe contener un formato válido"})
            }
        }
        if(value.length === 0) err = ({...err, email : "Por favor ingrese una dirección de email"})
        return err
    }

    const handleChange = (e) => {
        const field = e.target.id
        const value = e.target.value
        let err = {...errors}

        if(field === "name") err = validateName(value, err)
        if(field === "email") err = validateEmail(value, err)

        setErrors(err)
        
        setContact({...contact, [field] : value })
    }
    
    const submit = (e) => {
        e.preventDefault()
        let err = {...errors}

        err = validateName(e.target.elements.name.value, err)
        err = validateEmail(e.target.elements.email.value, err)
        
        if(!(typeof(err.name) !== "undefined" ||
        typeof(err.email) !== "undefined" ||
        typeof(err.phone) !== "undefined")) message(e)
        setErrors(err)
    }

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const message = (e) => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado exitosamente'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
            icon: 'error',
            title: 'Ooops, algo salió mal',
            text: error.text,
            })
        });
        e.target.reset()
    }

  return (
    <section className="w-100 pb-4" id="contacto">
        <article className="container-fluid">
            <div className="row p-2 py-1 my-4">
                <div className="col">
                    <h4 style={{'fontWeight' : '600'}}>Contacto</h4>
                </div>
            </div>
            <div className="row w-100 justify-content-md-center">
                <div className="col-md-6 col-lg-4 d-none d-md-block">
                    <FontAwesomeIcon icon={ faEnvelopesBulk } className="text-dark" style={{ 'fontSize' : '15rem' }} />
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="mb-3">
                        <div className="text-start px-4">
                            <div><FontAwesomeIcon icon={ faInbox } /> <a href="mailto:chaquetasnegraslife@gmail.com" className="text-decoration-none text-dark">chaquetasnegraslife@gmail.com</a></div>
                            <div><FontAwesomeIcon icon={ faWhatsapp } className="text-success" /> <a href="https://api.whatsapp.com/send?phone=5492233013828&text=Hola%20Jose!Quiero%20contratar%20uno%20de%20sus%20cursos!" rel="noreferrer" alt="Whatsapp" target="_blank" className="text-decoration-none text-dark">+54 9 2233 01-3828</a></div>
                        </div>
                    </div>
                    <form className="form" onSubmit={submit}>
                        <div className="mb-3">
                            <input type="text" className={"form-control border-dark rounded-pill px-4" + (errors.name ? " is-invalid" : "")} onChange={handleChange} id="name" placeholder="Nombre" name="from_name" />
                            { errors.name && <div className="invalid-feedback">{ errors.name }</div> }
                        </div>
                        <div className="mb-3">
                            <input type="email" className={"form-control border-dark rounded-pill px-4" + (errors.email ? " is-invalid" : "")} onChange={handleChange} id="email" placeholder="Email" name="from_email" />
                            { errors.email && <div className="invalid-feedback">{ errors.email }</div> }
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control border-dark rounded-3 px-4" id="message" rows="3" name="message" placeholder="Mensaje..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark">Enviar</button>
                    </form>
                </div>
            </div>
        </article>
    </section>
  )
}

export default Contact