import React from 'react'
import "./Construccion.css"
import Redes from '../Redes/Redes'

const Construccion = () => {
    return (
        <div className='mensaje'>
            <img src="./img/web/manglar.jpg" alt="obra" className='imgInicio' />
            <h1 className='construccion'>
                Rocío Ricagno
            </h1>
            <Redes />
        </div>
    )
}

export default Construccion