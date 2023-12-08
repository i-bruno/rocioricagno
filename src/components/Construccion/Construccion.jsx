import React from 'react'
import "./Construccion.css"
import Redes from '../Redes/Redes'

const Construccion = () => {
    return (
        <div className='mensaje'>
            <div className='grid-gallery'>
                <div className='image'>
                    <img src="./img/obras/03_capasAbrigo/ejercicio1.jpg" alt="obra" className='grid-gallery__image' />
                </div>
                <div className='image'>
                    <img src="./img/obras/04_pielDeRio/pielDeRio1.jpg" alt="" className='grid-gallery__image' />
                </div>
                <div className='image'>
                    <img src="./img/obras/05_sintesisMemoria/sinTitulo.jpg" alt="" className='grid-gallery__image' />
                </div>
                <div className='image'>
                    <img src="./img/obras/06_memoriaCartografica/memoriaCartografica.jpg" alt="" className='grid-gallery__image' />
                </div>
                <div className='image'>
                    <img src="./img/obras/07_inestable/inestable.jpg" alt="" className='grid-gallery__image' />
                </div>
                <div className='image'>
                    <img src="./img/obras/08_devastacion/devastacionCompleta.jpg" alt="" className='grid-gallery__image' />
                </div>
            </div>
        </div>
    )
}

export default Construccion