import React from 'react'
import Obras from '../Obras/Obras'

const Capasabrigo = () => {
    const { t } = useTranslation();

    return (
        <div>
            <section className="galeria">
                < Obras obra='capasabrigo' />
            </section>
            <section class="texto">
                <h6 className='titulo'>
                    {t("abrigo.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("abrigo.sub")}
                </p>
                <p className='textoDetalle'>
                    2021
                </p>
                <p className='textoDetalle'>
                    38 x 61 cm
                </p>
                <div className='textoObra'>
                    <p>
                        {t("abrigo.p1")}
                    </p>
                    <p>
                        {t("abrigo.p2")}
                    </p>
                    <p>
                        {t("abrigo.p3")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Capasabrigo