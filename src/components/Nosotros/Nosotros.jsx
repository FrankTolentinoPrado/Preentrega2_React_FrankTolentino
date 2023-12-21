import React, { useEffect } from "react";
import nos1 from '../images/aña 1.png'
import nos2 from '../images/aña 2.png'
import nos3 from '../images/aña 3.png'
import nos4 from '../images/aña 4.png'
import "./Nosotros.css"

const Nosotros = () => {

  useEffect(() =>{

    const clickear = () => {
      console.log("click");
    }

    window.addEventListener("click", () =>{
      console.log("click")
     })

     return () => {
      window.removeEventListener("click", () =>{
        console.log("click");
     })
    }

  }, [])

  
  return (
        <div className="container">
            <section className="sec2">
                <h2 className="subtitulo-sec2">INFORMACION ADICIONAL PARA NUESTROS CLIENTES</h2>
                <div className="container-sec2">
                  <div className="div-sec2">
                    <article className="article-sec2">
                      <img src={nos1} className="img-sec2" alt="Horarios de Atención" />
                      <h2>HORARIOS DE ATENCIÓN</h2>
                      <p>Nuestros horarios de atención se ajustan a la comodidad de nuestros clientes, abrimos desde las 7:00 a.m. a 22:00 p.m. de lunes a sábado.</p>
                    </article>
                  </div>
            
                  <div className="div-sec2">
                    <article className="article-sec2">
                      <img src={nos2} className="img-sec2" alt="Dirección del Local" />
                      <h2>DIRECCION DEL LOCAL</h2>
                      <p>Nosotros nos encontramos en la ciudad de Nuevo Chimbote (Ancash-Santa), específicamente en la Urbanización Paseo del Mar Manzana F5 Lote 7.</p>
                    </article>
                  </div>
            
                  <div className="div-sec2">
                    <article className="article-sec2">
                      <img src={nos3} className="img-sec2" alt="La Cultura Asiática" />
                      <h2>LA CULTURA ASIATICA</h2>
                      <p>Nosotros decidimos optar por la cultura asiática para ofrecer productos de calidad, teniendo como referente la cultura japonesa.</p>
                    </article>
                  </div>

                  <div className="div-sec2">
                    <article className="article-sec2">
                      <img src={nos4} className="img-sec2" alt="Productos a Pedido" />
                      <h2>PRODUCTOS A PEDIDO</h2>
                      <p>Con nosotros podrás pedir productos desde Japón y te los traeremos hasta la puerta de tu casa con una orden anticipada.</p>
                    </article>
                  </div>
                </div>                                                 
            </section>
        </div>
    )
}

export default Nosotros;