import React from 'react'
import Obras from '../Obras/Obras'
import "./Seniorita.css"
import { useTranslation } from "react-i18next";


const Seniorita = () => {
    const { t } = useTranslation();

    return (

        <div className="gridObra">
            <section className="galeria">
                < Obras obra='seniorita' />
            </section>

            <section class="texto">
                <h6 className='titulo'>
                    {t("seniorita.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("seniorita.sub")}
                </p>
                <p className='textoDetalle'>
                    2020
                </p>
                <p className='textoDetalle'>
                    77 x 58 cm
                </p>
                <div className='textoObra'>
                    <p>
                        {t("seniorita.p1")}
                    </p>
                    <p>
                        {t("seniorita.p2")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Seniorita