import React from 'react';
import "../index.css";
import plumaroja from "./../img/plumaroja.png"


function Footer() {
  return (
    <footer className='footer'>
        <div className='logoDiv'>
      <h4>Tienda de Rol La Pluma Roja</h4>
      <img  src={plumaroja} className="logoFooter" alt="logo" />
      </div>
      <div>
      <h5 className='creado'>Sitio creado por Joel Esidin</h5>
      </div>
    </footer>
  );
}



export default Footer;