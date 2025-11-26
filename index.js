import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pokedex from './pokedex'; // <-- ¡CAMBIO AQUÍ! Ahora importa Pokedex
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pokedex /> {/* <-- ¡CAMBIO AQUÍ! Ahora muestra el componente Pokedex */}
  </React.StrictMode>
);