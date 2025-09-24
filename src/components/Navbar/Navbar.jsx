import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useState } from 'react';
import { useTranslation } from "react-i18next";


export const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-white fixed-top border-bottom border-dark">
                    <div className="container-fluid">

                        <a class="navbar-brand" href="/">Rocío Ricagno</a>

                        <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={toggleMenu}
                        >

                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item" onClick={closeMenu}>
                                    <NavLink to={`/`} className="nav-link" aria-current="page">{t("nav.inicio")}</NavLink>
                                </li>
                                <li className="nav-item" onClick={closeMenu}>
                                    <NavLink to={`/bio`} className="nav-link">{t("nav.bio")}</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href='/'>
                                        {t("nav.obras")}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/proyectoarana`} className="dropdown-item w-auto">
                                                {t("arte.arana.titulo")}
                                            </NavLink>
                                        </li>
                                        {/* <li onClick={closeMenu}>
                                            <NavLink to={`/silencio`} className="dropdown-item w-auto">
                                                Hacer hablar al silencio
                                            </NavLink>

                                        </li> */}
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/capasabrigo`} className="dropdown-item w-auto">
                                                {t("arte.abrigo.titulo")}
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/pielderio`} className="dropdown-item w-auto">
                                                {t("arte.piel.titulo")}
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/sintesis`} className="dropdown-item w-auto">
                                                {t("arte.sintesis.titulo")}
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/memoria`} className="dropdown-item w-auto">
                                                {t("arte.memoria.titulo")}
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/inestable`} className="dropdown-item w-auto">
                                                {t("arte.inestable.titulo")}
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/devastacion`} className="dropdown-item w-auto">
                                                {t("arte.devastacion.titulo")}
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/devenirterritorio`} className="dropdown-item w-auto">
                                                {t("arte.devenir.titulo")}
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/seniorita`} className="dropdown-item w-auto">
                                                {t("arte.seniorita.titulo")}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item" onClick={closeMenu}>
                                    <NavLink to={`/contacto`} className="nav-link">{t("nav.contacto")}</NavLink>
                                </li>
                            </ul>
                            <div class="d-flex flex-column">
                                <div className="contenedorLink">
                                    <button onClick={() => changeLanguage("es")} className="btnTraduccion">
                                        {t("lang_es")}
                                    </button>
                                </div>
                                <div className="contenedorLink">
                                    <button onClick={() => changeLanguage("en")} className="btnTraduccion">
                                        {t("lang_en")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;