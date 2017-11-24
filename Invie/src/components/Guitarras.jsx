import React, { Component } from "react";
import { connect } from "react-redux";
import CSSTransitionGroup from "react-addons-css-transition-group";

function mapStateToProps(state){
  return{
    guitarras: state.guitarras,

  }
}

class Guitarras extends Component {
  render(){
  return(
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestras guitarras</h2>
        {
          this.props.guitarras.map((guitarra, index)=> {
            return (
              <article className="guitarra" key={index}>
              <CSSTransitionGroup
                transitionName="flicker"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                <img
                 src={guitarra.image}
                 key={guitarra.image}
                 width="350"
                 alt={guitarra.alt}
                 className="guitarra-image"
               />
              </CSSTransitionGroup>
              <CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeave={false}
              >
                <div className="contenedor-guitarra" key={guitarra.name}>
                <h3 className="guitarra-name">{guitarra.name}</h3>
                <ol>
                {guitarra.features.map((feature, index)=> {
                  return(
                    <li key={index}>{feature}</li>
                  )
                })}
                </ol>
                </div>
              </CSSTransitionGroup>
              </article>
            )
          })
        }
      </section>
    )
  }
}

export default connect(mapStateToProps)(Guitarras);

// <article className="guitarra b">
//     <img data-src={classic} width="350" alt="Guitarra Invie Classic" className="left" />
//     <div className="contenedor-guitarra-b">
//     <h3 className="title-b">Invie Clasica</h3>
//     <ol>
//       <li>Estilo vintage</li>
//       <li>Liviana</li>
//       <li>Inicia tu camino como rockstar</li>
//     </ol>
//     </div>
// </article>
// </section>
