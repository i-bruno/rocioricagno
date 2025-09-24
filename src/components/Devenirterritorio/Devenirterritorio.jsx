import React from 'react'
import Obras from '../Obras/Obras'

const Devenirterritorio = () => {
    const { t } = useTranslation();

    return (
        <div>
            <section className="galeria">
                < Obras obra='devenirterritorio' />
            </section>
            <section class="texto">
                <h6 className='titulo'>
                    {t("devenir.titulo")}
                </h6>
                <p className='textoDetalle'>
                    {t("devenir.sub")}
                </p>
                <p className='textoDetalle'>
                    2020
                </p>
                <p className='textoDetalle'>
                    77 x 58 cm
                </p>
                <div className='textoObra'>
                    <p>
                        {t("devenir.p1")}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Devenirterritorio