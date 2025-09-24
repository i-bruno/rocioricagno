import React from 'react'
import "./Sintesis.css"
import Obras from '../Obras/Obras'
import { useTranslation } from "react-i18next";


const Sintesis = () => {
    const { t } = useTranslation();

    return (
        <div className="gridObra">
            <section className="galeria">
                < Obras obra='sintesis' />
            </section>

            <section class="texto">
                <h6 className='titulo'>
                    {t("arte.sintesis.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("arte.sintesis.sub")}
                </p>
                <p className='textoDetalle'>
                    2023
                </p>
                <p className='textoDetalle'>
                    100 x 130 cm
                </p>
                <div className='textoObra'>
                    <p>
                        {t("arte.sintesis.p1")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Sintesis