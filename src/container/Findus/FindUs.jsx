import React from "react";
import { Link } from "react-router-dom";
import entrada from "../../assets/entrada.png";


const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Estamos en
      </h1> {/*Find Us*/}
      <div className="app__wrapper-content">
        <p className="p__opensans">
            25 de Mayo 1553, Villa Ocampo, Santa Fe
        </p>
        {/*<p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Horarios de atención
        </p> Opening Hours*/}
        <p className="p__opensans">Lunes a Viernes de 8 a 12hs y 16 a 20hs.</p> {/*Mon - Fri: 10:00 am - 02:00 am*/}
        <p className="p__opensans">+549 3482 599595</p>
      </div>
      <Link to='javascript:void(0)'
          onClick={() => window.location = 'mailto:medimagenvo@gmail.com'}>
          medimagenvo@gmail.com
      </Link>
    </div>

    <div className="app__wrapper_img">
      <img src={entrada} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
