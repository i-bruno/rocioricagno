import React from 'react'
import "./Bio.css"
import { useTranslation } from "react-i18next";

const Bio = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="gridBio">
                <section className="bio">
                    <div className="profile">
                        <img src="./img/web/perfil1.webp" alt="foto de perfil" className='imgPerfil' />
                        <div className="bioText">
                            <p>
                                {t("bio.p1")}
                            </p>
                            <p className='noDisplay'>
                                En 2016 se traslada a la Capital Federal y cursa la especialización en Educación Sexual Integral en el Inst. del Profesorado Dr. Joaquín V. González. Desde su rol docente colabora en la muestra itinerante “No Fue un Juego” en el Museo del Holocausto, Bs. As. 2018/2019. Lleva a cabo junto con el equipo educativo del Ex CCD,TyE “Club Atlético” la muestra “Gol a la memoria” A cuarenta años del mundial ‘78 - 2018.
                            </p>
                            <p>
                                {t("bio.p2")}
                            </p>
                            <div className='bioText2'>
                                <p>
                                    {t("bio.p3")}
                                </p>
                                <p>
                                    {t("bio.p4")}
                                </p>
                                <p>
                                    {t("bio.p5")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="expos">
                    <div className="colectivas">
                        <h4>
                            {t("colectivas.titulo")}
                        </h4>
                        <ul>
                            <li>
                                {t("colectivas.colec16")}
                            </li>
                            <li>
                                {t("colectivas.colec15")}
                            </li>
                            <li>
                                {t("colectivas.colec14")}
                            </li>
                            <li>
                                {t("colectivas.colec13")}
                            </li>
                            <li>
                                {t("colectivas.colec12")}
                            </li>
                            <li>
                                {t("colectivas.colec11")}
                            </li>
                            <li>
                                {t("colectivas.colec10")}
                            </li>
                            <li>
                                {t("colectivas.colec9")}
                            </li>
                            <li>
                                {t("colectivas.colec8")}
                            </li>
                            <li>
                                {t("colectivas.colec7")}
                            </li>
                            <li>
                                {t("colectivas.colec6")}
                            </li>
                            <li>
                                {t("colectivas.colec5")}
                            </li>
                            <li>
                                {t("colectivas.colec4")}
                            </li>
                            <li>
                                {t("colectivas.colec3")}
                            </li>
                            <li>
                                {t("colectivas.colec2")}
                            </li>
                            <li>
                                {t("colectivas.colec1")}
                            </li>
                        </ul>
                    </div>
                    <div className='distinciones'>
                        <h4>
                            {t("dist.titulo")}
                        </h4>
                        <ul>
                            <li>
                                {t("dist.dist9")}
                            </li>
                            <li>
                                {t("dist.dist8")}
                            </li>
                            <li>
                                {t("dist.dist7")}
                            </li>
                            <li>
                                {t("dist.dist6")}
                            </li>
                            <li>
                                {t("dist.dist5")}
                            </li>
                            <li>
                                {t("dist.dist4")}
                            </li>
                            <li>
                                {t("dist.dist3")}
                            </li>
                            <li>
                                {t("dist.dist2")}
                            </li>
                            <li>
                                {t("dist.dist1")}
                            </li>
                        </ul>
                    </div>

                    <div className="individuales">
                        <h4>
                            {t("individuales.titulo")}
                        </h4>
                        <ul>
                            <li>
                                {t("individuales.indi5")}
                            </li>
                            <li>
                                {t("individuales.indi4")}
                            </li>
                            <li>
                                {t("individuales.indi3")}
                            </li>
                            <li>
                                {t("individuales.indi2")}
                            </li>
                            <li>
                                {t("individuales.indi1")}
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Bio