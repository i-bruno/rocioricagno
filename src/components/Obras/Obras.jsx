import React from 'react'
import "./Obras.css"
import { PhotoProvider, PhotoView } from 'react-photo-view'

const Obras = (props) => {

  let proyectoarana = [
    "./img/obras/01_proyectoArana/proyectoArana.webp"
  ]

  let silencio = [
    "./img/obras/02_hacerHablarAlSilencio/lancha2.webp",
    "./img/obras/02_hacerHablarAlSilencio/viaje.webp",
    "./img/obras/02_hacerHablarAlSilencio/viaje1.webp",
    "./img/obras/02_hacerHablarAlSilencio/montajeSotanoIsometrica.webp",
    "./img/obras/02_hacerHablarAlSilencio/montajeSotanoIzquierda.webp",
    "./img/obras/02_hacerHablarAlSilencio/montajeSotanoTransparenciaVentana.webp"
  ]

  let capasabrigo = [
    "./img/obras/03_capasAbrigo/ejercicio1.webp",
    "./img/obras/03_capasAbrigo/ejercicio1Detalle.webp",
    "./img/obras/03_capasAbrigo/ejercicio1Detalle1.webp",
    "./img/obras/03_capasAbrigo/ejercicio2.webp",
    "./img/obras/03_capasAbrigo/ejercicio3.webp",
    "./img/obras/03_capasAbrigo/ejercicio4.webp"
  ]

  let pielderio = [
    "./img/obras/04_pielDeRio/pielDeRio1.webp",
    "./img/obras/04_pielDeRio/pielDeRio2.webp"
  ]

  let sintesis = [
    "./img/obras/05_sintesisMemoria/sinTitulo.webp"
  ]

  let memoria = [
    "./img/obras/06_memoriaCartografica/memoriaCartografica.webp"
  ]

  let inestable = [
    "./img/obras/07_inestable/inestable.jpg",
    "./img/obras/07_inestable/inestableDetalle2.webp",
    "./img/obras/07_inestable/inestableDetalle3.webp",
    "./img/obras/07_inestable/inestableDetalle4.webp"
  ]

  let devastacion = [
    "./img/obras/08_devastacion/devastacionCompleta.webp",
    "./img/obras/08_devastacion/devastacionDetalle1.webp",
    "./img/obras/08_devastacion/devastacionDetalle2.webp",
    "./img/obras/08_devastacion/devastacionDetalle3.webp"
  ]

  let devenirterritorio = [
    "./img/obras/09_devenirTerritorio/devenirTerritorio.webp",
    "./img/obras/09_devenirTerritorio/devenirTerritorio1.webp"
  ]

  let seniorita = [
    "./img/obras/10_seniorita/Seniorita1.webp",
    "./img/obras/10_seniorita/senioritaDetalle1.webp",
    "./img/obras/10_seniorita/senioritaDetalle2.webp"
  ]

  switch (props.obra) {

    case 'proyectoarana':
      return (
        <>
          <PhotoProvider>
            <div className="contenedorArana">
              {proyectoarana.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgArana' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'silencio':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {silencio.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'capasabrigo':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {capasabrigo.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

      case 'pielderio':
        return (
          <>
            <PhotoProvider>
              <div className="contenedorPiel">
                {pielderio.map((image, index) => {
                  return (
                    <PhotoView key={index} src={image}>
                      <img src={image} alt="obras de arte" className='imgObras' />
                    </PhotoView>
                  )
                })}
              </div>
            </PhotoProvider>
          </>
        )

        case 'sintesis':
          return (
            <>
              <PhotoProvider>
                <div className="contenedor">
                  {sintesis.map((image, index) => {
                    return (
                      <PhotoView key={index} src={image}>
                        <img src={image} alt="obras de arte" className='imgObras' />
                      </PhotoView>
                    )
                  })}
                </div>
              </PhotoProvider>
            </>
          )

          case 'memoria':
            return (
              <>
                <PhotoProvider>
                  <div className="contenedor">
                    {memoria.map((image, index) => {
                      return (
                        <PhotoView key={index} src={image}>
                          <img src={image} alt="obras de arte" className='imgObras' />
                        </PhotoView>
                      )
                    })}
                  </div>
                </PhotoProvider>
              </>
            )

    case 'inestable':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {inestable.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'devastacion':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {devastacion.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'devenirterritorio':
      return (
        <>
          <PhotoProvider>
            <div className="contenedorDevenir">
              {devenirterritorio.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    case 'seniorita':
      return (
        <>
          <PhotoProvider>
            <div className="contenedor">
              {seniorita.map((image, index) => {
                return (
                  <PhotoView key={index} src={image}>
                    <img src={image} alt="obras de arte" className='imgObras' />
                  </PhotoView>
                )
              })}
            </div>
          </PhotoProvider>
        </>
      )

    default:
  }
}



export default Obras