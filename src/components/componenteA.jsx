import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './../models/contacto.class';
import ComponenteB from './componenteB';

function ComponenteA() {
    
    const contac = new Contacto('Nicolas','Rodriguez', 'nicolasrodriguezjr@hotmail.com',false);

    const changeState =(id) => {
        console.log('TODO: Cambiar estado de un Contacto');
    }

  return (
    <div>
        <ComponenteB contacto={contac}></ComponenteB>
        
    </div>
  )
}

ComponenteA.propTypes = {
    contac: PropTypes.instanceOf(Contacto)
}

export default ComponenteA
