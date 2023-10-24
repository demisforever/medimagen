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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d521.2627044873049!2d-59.35508566023105!3d-28.49088261472818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944f1b20c96bfce1%3A0x111aeb60cc7ff06!2sMedImagen!5e0!3m2!1ses-419!2sar!4v1698175966322!5m2!1ses-419!2sar"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
       {/*<img src={entrada} alt="finus_img" /> */}
    </div>
  </div>
);

export default FindUs;
