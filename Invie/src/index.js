import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './css/style.css';
import "./css/animations.css";
import Invie from './Invie';
import registerServiceWorker from './registerServiceWorker';
import cheet from "cheet.js";
import logoPortada from "./images/invie.png";
import logoPlatzi from "./images/platzi.png";
import acustica from "./images/invie-acustica.png";
import classic from "./images/invie-classic.png";
import { Provider } from "react-redux";
import { createStore } from "redux";


import easterA from "./images/easter-a.jpg";
import easterB from "./images/easter-b.jpg";


const initialState ={
  isAnimated: false,
  menu: [
    {
      href:"index.html",
      title: "Home",
    },
    {
      href: "#guitarras",
      title: "Guitarras",
    },
    {
      href: "precios.html",
      title: "Precios",
    },
    {
      href: "hola.html",
      title: "Don´t click me",
    }
  ],

  logoPortada: logoPortada,

  guitarras:[
    {
      image: acustica,
      alt: "Guitarra Invie Acustica",
      name: "Invie Acustica",
      features: [
        "Estilo vintage",
        "Madera pura",
        "Incluye estuche invisible de aluminio",
      ]
    },
    {
      image: classic,
      alt: "Guitarra Invie Classic",
      name: "Invie Classic",
      features: [
        "Estilo vintage",
        "Madera liviana",
        "Empieza tu camino al exito",
      ]
    }
  ]
}

function reducer(state, action){
  switch (action.type) {
    case "UPDATE_PROPS":{
      const newProps = action.payload.props;
      return { ...state, ...newProps }
    }


    default:
    return state

  }
}

const store = createStore(reducer, initialState);

const easter = {
  isAnimated: "is-animated",
  menu: [
  
  ],

logoPortada: logoPlatzi,
  guitarras: [
      {
        image: easterA,
        alt: "Guitarra chico",
        name: "Invie Familiar",
        features: [
          "Lista para copiar a los Simpsons",
          "Aire puro",
          "Chistes malos",
        ]
      },
      {
        image: easterB,
        alt: "Guitarra chica",
        name: "Invie Classic",
        features: [
          "Estilo vintage",
          "Madera liviana",
          "Empieza tu camino al exito",
        ]
      }
    ]
}

cheet("i n v i e",()=>{
  // console.log("listo, descubriste el easter egg");
  store.dispatch({
    type: "UPDATE_PROPS",
    payload: {
      props:easter
    }
  });
});
cheet("g o b a c k",()=>{
  // console.log("Regresas al estado inicial");
  store.dispatch({
    type: "UPDATE_PROPS",
    payload: {
      props: initialState,
    }
  });
})


ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
