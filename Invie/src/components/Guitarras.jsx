import React, { Component } from "react";
import acustica from "../images/invie-acustica.png";
import classic from "../images/invie-classic.png";

class Guitarras extends Component {
  render(){
    return(
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestras guitarras</h2>
        <article className="guitarra">
            <img data-src={acustica} width="350"  alt="Guitarra Invie Acustica" className="right" />
            <div className="contenedor-guitarra-a">
              <h3 className="title-b">Invie Acustica</h3>
              <ol>
                <li>Estilo vintage</li>
                <li>Madera pura</li>
                <li>Incluye estuche invisible de aluminio</li>
              </ol>
            </div>
        </article>
        <article className="guitarra b">
            <img data-src={classic} width="350" alt="Guitarra Invie Classic" className="left" />
            <div className="contenedor-guitarra-b">
            <h3 className="title-b">Invie Clasica</h3>
            <ol>
              <li>Estilo vintage</li>
              <li>Liviana</li>
              <li>Inicia tu camino como rockstar</li>
            </ol>
            </div>
        </article>
      </section>
    )
  }
}
export default Guitarras;
