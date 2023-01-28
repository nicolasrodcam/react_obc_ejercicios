import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './../models/contacto.class';

function ComponenteB({contacto}) {

  return (
    <div>
        <h3>Nombre: {contacto.nombre}</h3>
        <h3>Apellido: {contacto.apellido}</h3>
        <h3>Email: {contacto.email}</h3>
        <h3>El contacto esta: {contacto.conectado ? 'Contacto En Línea' : 'No Disponible'}</h3>
    </div>
  )
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteB
