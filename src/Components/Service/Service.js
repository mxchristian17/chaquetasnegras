import React from 'react'

const Service = (props) => {

    const { title, img, description } = props
    const descriptionStyle = { fontSize : '0.9em' }

  return (
    <article className="col-12 col-md-6 col-lg-4 col-xl-3 p-0 m-0">
        <div className="row py-4 px-2 rounded rounded-3 bg-dark text-light m-1">
        
            <div className="col-12"><h6>{ title }</h6></div>
            <div className="col-12 py-2"><img src={ img } alt={ title } className="w-100 rounded" /></div>
            <div className="col-12" style={ descriptionStyle } >{ description }</div>

        </div>
    </article>
  )
}

export default Service