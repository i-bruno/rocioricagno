import React from 'react'
import Obras from '../Obras/Obras'
import "./Proyectoarana.css"
import { useTranslation } from "react-i18next";

const Proyectoarana = () => {
    const { t } = useTranslation();

    return (

        <div class="gridArana">
            <section className="Foto d-flex flex-column align-items-center">
                < Obras obra='proyectoarana' />
            </section>
            <section className="Texto1">
                <h6 className='titulo'>
                    {t("arte.arana.titulo")}
                </h6>

                <p>
                    {t("arte.arana.sub")}
                </p>

                <p>
                    {t("arte.arana.p1")}
                </p>

                <p>
                    {t("arte.arana.p2")}
                </p>

                <p>
                    {t("arte.arana.p3")}
                </p>
                <p>
                    {t("arte.arana.p4")}
                </p>
            </section>
            <section className="Texto2 d-flex flex-column align-items-center">

                <p>
                    {t("arte.arana.p5")}
                </p>

                <p>
                    {t("arte.arana.p6")}
                </p>

                <p>
                    {t("arte.arana.p7")}
                </p>
                <div className='botones'>
                    <a href="http://www.proyectoarana.com.ar" target='_blank' rel="noopener noreferrer"><button className="botonArana">Proyecto Arana</button></a>

                    <a href="http://www.proyectoarana.com.ar" target='_blank' rel="noopener noreferrer"><button className="botonArana">Arana libro</button></a>
                </div>
            </section>
        </div>
    )
}

export default Proyectoarana