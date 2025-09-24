import React from 'react'
import Obras from '../Obras/Obras'
import { useTranslation } from "react-i18next";

const Capasabrigo = () => {
    const { t } = useTranslation();

    return (
        <div>
            <section className="galeria">
                < Obras obra='capasabrigo' />
            </section>
            <section class="texto">
                <h6 className='titulo'>
                    {t("arte.abrigo.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("arte.abrigo.sub")}
                </p>
                <p className='textoDetalle'>
                    2021
                </p>
                <p className='textoDetalle'>
                    38 x 61 cm
                </p>
                <div className='textoObra'>
                    <p>
                        {t("arte.abrigo.p1")}
                    </p>
                    <p>
                        {t("arte.abrigo.p2")}
                    </p>
                    <p>
                        {t("arte.abrigo.p3")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Capasabrigo