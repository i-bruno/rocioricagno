import React from 'react'
import "./Memoria.css"
import Obras from '../Obras/Obras'

const Memoria = () => {
    const { t } = useTranslation();

    return (
        <div className="gridObra">
            <section className="galeria">
                < Obras obra='memoria' />
            </section>

            <section class="texto">
                <h6 className='titulo'>
                    {t("memoria.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("memoria.sub")}
                </p>
                <p className='textoDetalle'>
                    2020
                </p>
                <p className='textoDetalle'>
                    28,5 x 48 cm
                </p>
                <div className='textoObra'>
                    <p>
                        {t("memoria.p1")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Memoria