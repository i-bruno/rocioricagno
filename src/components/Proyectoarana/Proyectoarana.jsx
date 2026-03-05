import React from 'react'
import Obras from '../Obras/Obras'
import "./Proyectoarana.css"
import { useTranslation } from "react-i18next";

const Proyectoarana = () => {
    const { t } = useTranslation();

    return (

        <div class="gridArana min-content">
            <section className="Foto d-flex flex-column align-items-center">
                < Obras obra='proyectoarana' />
            </section>
            <section className="Texto1">
                <h6 className='titulo'>
                    {t("arte.arana.titulo")} - {t("arte.arana.sub1")}
                </h6>

                <p>
                    {t("arte.arana.sub2")}
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
            <section className="Texto2 d-flex flex-column align-items-start">

                <p>
                    {t("arte.arana.p5")}
                </p>

                <p>
                    {t("arte.arana.p6")}
                </p>

                <p>
                    {t("arte.arana.p7")}
                </p>
                <p>
                    {t("arte.arana.p8")}
                </p>
                <p>
                    {t("arte.arana.p9")}
                </p>
                <p>
                    {t("arte.arana.p10")}
                </p>
                <p>
                    {t("arte.arana.p11")}
                </p>

            </section>
            <section className='Botonera d-flex flex-column align-items-center min-content'>
                <div className='botones'>
                    <a href="http://www.proyectoarana.com.ar" target='_blank' rel="noopener noreferrer"><button className="botonArana">Proyecto Arana</button></a>

                    <a href="/pdf/fotolibro.pdf" target='_blank' rel="noopener noreferrer"><button className="botonArana">Arana libro</button></a>
                </div>
            </section>
        </div>
    )
}

export default Proyectoarana