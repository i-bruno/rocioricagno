import React from 'react'
import Obras from '../Obras/Obras'

const Inestable = () => {
    const { t } = useTranslation();

    return (
        <div>
            <section className="galeria">
                < Obras obra='inestable' />
            </section>
            <section class="texto">
                <h6 className='titulo'>
                    {t("inestable.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("inestable.sub")}
                </p>
                <p className='textoDetalle'>
                    2020
                </p>
                <p className='textoDetalle'>
                    140 x 200 x 30 cm
                </p>
                <div className='textoObra'>
                    <p>
                        {t("inestable.p1")}
                    </p>
                    <p>
                        {t("inestable.p2")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Inestable