import React from "react";

import logoRotorBlue from '../../assets/rotor-blue.svg';
import logoMedImagen from '../../assets/medImagen-grey.svg';
import pc from "../../assets/pc.png";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="header">

    <div className="app__wrapper_img App-header">
      <img src={logoRotorBlue} className="App-logo" alt="logo" />
      <img src={logoMedImagen} className="med-imagen-logo" alt="logo" />
    </div>

    <div className="app__wrapper_info">
      <h1 className="app__header-h1">CENTRO DE TOMOGRAFIA</h1> {/* Centro de tomografía */ }
      <h1 className="app__header-h1">AXIAL COMPUTADA</h1> {/* Centro de tomografía */ }
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Nuestra misión central es preservar tu bienestar.{" "}
      </p>
      {/*
      <button type="button" className="custom__button">
        Explore Menu
      </button>
      */ }
    </div>



  </div>
);

export default Header;
