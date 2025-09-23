import React from 'react'
import "./Bio.css"

const Bio = () => {
    return (
        <>
            <div className="gridBio">
                <section className="bio">
                    <div className="profile">
                        <img src="./img/web/perfil1.webp" alt="foto de perfil" className='imgPerfil' />
                        <div className="bioText">
                            <p>
                                Rocío Ricagno nace en el año 1990 en San Fernando, Buenos Aires. Crece en Tigre y se reconoce tanto parte de su ciudad como de sus islas. Es artista visual y docente. Sus prácticas artísticas se vinculan con el delta del río Paraná, donde utiliza diversos lenguajes y acciones para generar nuevas miradas en torno al territorio.
                            </p>
                            <p className='noDisplay'>
                                En 2016 se traslada a la Capital Federal y cursa la especialización en Educación Sexual Integral en el Inst. del Profesorado Dr. Joaquín V. González. Desde su rol docente colabora en la muestra itinerante “No Fue un Juego” en el Museo del Holocausto, Bs. As. 2018/2019. Lleva a cabo junto con el equipo educativo del Ex CCD,TyE “Club Atlético” la muestra “Gol a la memoria” A cuarenta años del mundial ‘78 - 2018.
                            </p>
                            <p>
                                Recibe en 2015 el título de Profesora de Artes Visuales otorgado por la Escuela de Artes Visuales Antonio Berni. Estudia Fotografía Documental en FILO - UBA y Cine Documental Comunitario en la ENERC - 2020. Hoy en día cursa el ciclo de licenciatura en Artes de la UNSAM. Realiza Clínica de obra con Andrés Labaké, María Lightowler y Federico de La Puente. Entre el 2020 y el 2023 asiste a los talleres de Emilia Demichelis y Diego Perrotta. 
                            </p>
                            <div className='bioText2'>
                                <p>
                                    En el 2021 y 2022 le otorgan becas de residencia en Tucumán, Entre Ríos y Buenos Aires. Participó en variados salones, muestras colectivas y realizó muestras individuales en Neuquén, Córdoba, Santa Fe y Buenos Aires. Es seleccionada para cursar el programa anual de estudios de creación y circulación de obra en Proyecto Imaginario LATAM y le fue otorgada la Beca Creación del FNA en el año 2021 y 2022. 
                                </p>
                                <p>
                                    Recibe 1ra Mención en el 4to salón de la mujer: Género y Derechos del Centro Argentino de Arte Textil y Mención en el 5to Premio MacSur 2021. En el 2023 el Palacio Belgrano Otamendi de la Ciudad de San Fernando adquirió una de sus obras para que forme parte de su muestra permanente en el museo.
                                </p>
                                <p>
                                    Actualmente se encuentra explorando las características de los materiales y sus poéticas. A su vez, ampliando las fronteras de expresión incorporando publicaciones gráficas, medios audiovisuales y lo instalativo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="expos">
                <div className="colectivas">
                        <h4>
                            Muestras colectivas
                        </h4>
                        <ul>
                            <li>2025 Terra Incognita - Casona de los Olivera, Buenos Aires</li>
                            <li>2025 Pequeñas Colecciones - Casona de los Olivera, Buenos Aires</li>
                            <li>2025 Espacio Kuyen - SACH, Se agrandó Chacarita, Buenos Aires</li>
                            <li>
                                2024-2025 <i>Blanda</i>. Muestra de libros textiles. Punta Alta, Municipalidad de Coronel Rosales, Provincia de Buenos Aires.
                            </li>
                            <li>
                                2024 <i>Acopio de raíces. Proyecto naturaleza, textiles y paisaje</i>. Museo de la mujer, Buenos Aires
                            </li>
                            <li>
                                2023 Noche de los Museos, Colegio N°6 Manuel Belgrano
                            </li>
                            <li>
                                2023 Amuleto Galería Muestra “Seres”, Vicente Lopez
                            </li>
                            <li>
                                2023 Museo Otamendi, San Fernando - Adquisición de obra en muestra permanente
                            </li>
                            <li>
                                2022 5to Premio MACSur - Museo de Arte Contemporáneo del Sur
                            </li>
                            <li>
                                2022 4to Salón de la Mujer: Género y Derechos - Centro Argentino de Arte Textil
                            </li>
                            <li>
                                2022 Quinta el Ombú - San Fernando, Buenos Aires
                            </li>
                            <li>
                                2021 Salón Primavera - San Fernando
                            </li>
                            <li>
                                2020/2021 VI y VII Encuentro de Arte Textil - Umbral Espacio de Arte, Buenos Aires
                            </li>
                            <li>
                                2020 Distrito Once - Circuito de arte, Buenos Aires
                            </li>
                            <li>
                                2016 Museo de la ciudad de San Fernando, Buenos Aires
                            </li>
                            <li>
                                2009 Centro cultural la tertulia - Don Torcuato, Tigre
                            </li>
                        </ul>
                    </div>
                    <div className='distinciones'>
                        <h4>
                            Distinciones y becas
                        </h4>
                        <ul>
                            <li>
                                2022 Premio al reconocimiento por el aporte a la cultura sanfernandina
                            </li>
                            <li>
                                2022 Mención 5to Premio MACSur - Museo de Arte Contemporáneo del Sur
                            </li>
                            <li>
                                2022 Primera Mención 4to Salón de la Mujer: Género y Derechos - Centro Argentino de Arte Textil
                            </li>
                            <li>
                                2022 Beca de Residencia Sirve Verse - ARTLAB
                            </li>
                            <li>
                                2022 Beca Residencia La Rural Raco, Tucumán
                            </li>
                            <li>
                                2022 Beca Clínica de obra - La Tribu y el Territorio
                            </li>
                            <li>
                                2022 Beca Creación para finalización de proyecto - Fondo Nacional de las Artes
                            </li>
                            <li>
                                2021 Beca Creación - Fondo Nacional de las Artes
                            </li>
                            <li>
                                2021 Beca Residencia Interzona
                            </li>
                        </ul>
                    </div>
                    
                    <div className="individuales">
                        <h4>
                            Muestras individuales
                        </h4>
                        <ul>
                            <li>
                                2024 <i>Fronteras permeables</i>. Museo de Bellas Artes, Municipalidad de Río Cuarto, Córdoba
                            </li>
                            <li>
                                2024 <i>Mas allá del paisaje</i>. Alianza Francesa, Buenos Aires
                            </li>
                            <li>
                                2024 Piel de Río en el Foro Abierto 2024, Universidad Nacional del Litoral, Santa Fe.
                            </li>
                            <li>
                                2024 Museo de Arte Contemporáneo Conrad Meier, Villa La Angostura
                            </li>
                            <li>
                                2023 Museo Casa Sarmiento, Tigre, Buenos Aires.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Bio