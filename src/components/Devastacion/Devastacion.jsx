import React from 'react'
import Obras from '../Obras/Obras'
import { useTranslation } from "react-i18next";

const Devastacion = () => {
    const { t } = useTranslation();

    return (
        <div>
            <section className="galeria">
                < Obras obra='devastacion' />
            </section>
            <section class="texto">

                <h6 className='titulo'>
                    {t("devastacion.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("devastacion.sub")}
                </p>
                <p className='textoDetalle'>
                    2020
                </p>
                <p className='textoDetalle'>
                    36 x 41 cm
                </p>
                <div className='textoObra'>
                    <p>
                        {t("devastacion.p1")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Devastacion