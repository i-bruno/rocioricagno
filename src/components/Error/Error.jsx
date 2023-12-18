import React from 'react'
import Redes from '../Redes/Redes'
import './Error.css'

const Error = () => {
    return (
        <>
            <div className='contenedorError'>
                <h4>La página a la que intentas acceder es inexistente</h4>
                <h6>
                    rocioaricagno@gmail.com
                </h6>
                <p>
                    Buenos Aires, Argentina
                </p>
                <Redes />
            </div>
        </>
    )
}

export default Error