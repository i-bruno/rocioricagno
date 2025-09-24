import React from 'react'
import Obras from '../Obras/Obras'
import "./Pielderio.css"
import { useTranslation } from "react-i18next";

const Pielderio = () => {
    const { t } = useTranslation();

    return (
        <div className="gridObra">
            <section className="galeria">
                < Obras obra='pielderio' />
            </section>

            <section class="texto">
                <h6 className='titulo'>
                    {t("piel.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("piel.sub")}
                </p>
                <p className='textoDetalle'>
                    2023
                </p>
                <p className='textoDetalle'>
                    {t("piel.p1")}
                </p>
                <div className='textoObra'>
                    <p>
                        {t("piel.p2")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Pielderio

