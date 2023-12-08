import React from 'react'
import Obras from '../Obras/Obras'

const Devastacion = () => {
    return (
        <div>
            <section className="galeria">
                < Obras obra='devastacion' />
            </section>
            <section class="texto">

                <h6 className='titulo'>
                    Devastación
                </h6>
                <p className='textoDetalle'>
                    Bolsas de infusiones quemadas sobre papel
                </p>
                <p className='textoDetalle'>
                    2020
                </p>
                <p className='textoDetalle'>
                    36 x 41 cm
                </p>
                <div className='textoObra'>
                <p>
                    Cuerpos orgánicos segmentados arden vulnerables, atrapados por la acción abrasiva del fuego. La obra pone el foco en la expansión de las urbes sobre los ríos, el auge del monocultivo. y el saqueo del ecosistema bajo las promesas de progreso. Los Humedales de la región del delta del Río Paraná están siendo amenazados por el accionar de las economías actuales produciendo cambios devastadores para el ecosistema y sus habitantes. Lo cotidiano, lo ritual y las técnicas se transforman de manera forzada junto con el ecosistema, provocando la pérdida del ser/hacer. Mantener vivo estos quehaceres, y escenas cotidianas del espacio, es un acto político que defiende, no sólo el ecosistema con su biodiversidad, sino también a las comunidades y su identidad en relación al territorio.
                </p>
                </div>
            </section>
        </div>
    )
}

export default Devastacion