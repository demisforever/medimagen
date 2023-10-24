import React from "react";
import { Link } from "react-router-dom";
import entrada from "../../assets/entrada.png";
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {BiMap} from 'react-icons/bi'



const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Estamos en
      </h1> {/*Find Us*/}
      <div className="app__wrapper-content">
        <p className="p__opensans">
            <BiMap /> 25 de Mayo 1553, Villa Ocampo, Santa Fe
        </p>
        <p className="p__opensans">Lunes a Viernes de 8 a 12hs y 16 a 20hs.</p> {/*Mon - Fri: 10:00 am - 02:00 am*/}
        
        <p
          className="p__cormorant"
          style={{  margin: "2rem 0rem 1rem 0" }}
        >
          Contactos
        </p> {/*Opening Hours*/}
        <p className="p__opensans">
          <a style={{ textDecoration: 'none' }} href="https://wa.me/5493482599595" target="_blank">
            <FaWhatsapp /> +549 3482 599595</a>
        </p>        
        <p className="p__opensans">
          <a style={{ textDecoration: 'none' }} href='mailto:medimagenvo@gmail.com' target="_blank">
              <AiOutlineMail /> medimagenvo@gmail.com</a>
        </p>
      
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={entrada} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
