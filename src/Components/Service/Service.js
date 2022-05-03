import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';

const Service = (props) => {

    const { title, img, description } = props
    const styleDescription = { fontSize : '1em' }

    const styleParalax = {
      backgroundImage: 'url("' + img + '")',
      minHeight: '400px',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
/*
  return (
    <article className="col-12 col-md-6 col-lg-4 col-xl-3 p-0 m-0">
        <div className="row py-4 px-2 rounded rounded-3 bg-dark text-light m-1">
        
            <div className="col-12"><h6>{ title }</h6></div>
            <div className="col-12 py-2"><img src={ img } alt={ title } className="w-100 rounded" /></div>
            <div className="col-12" style={ descriptionStyle } >{ description }</div>

        </div>
    </article>
  )
  */

  return (
    <article className="container-fluid m-0 p-0">
      <div className="row w-100 p-4 m-0 border-bottom border-light border-3 bg-dark text-light">
        <div className="col-12 w-100 p-4 m-0" style={ styleDescription }>
          <h4 className="pb-4 text-uppercase fw-light"><FontAwesomeIcon className="h5 align-middle" icon={ faSpa } /> { title }</h4>
          <span className="opacity-75">{ description }</span>
        </div>
      </div>
      <div className="row w-100 p-0 m-0">
        <div className="col-12 w-100 p-0 m-0" style={ styleParalax } />
      </div>
    </article>
  )
}

export default Service