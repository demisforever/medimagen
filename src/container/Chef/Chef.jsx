import React from "react";

import tomografo1 from "../../assets/tomografo1.png";
import pc from "../../assets/pc.png";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="about">
    
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={tomografo1} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">Sobre nosotros</h1> {/* What we believe in */}

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans">
            Nuestra misión central es preservar tu bienestar.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          Med Imagen es un Centro de Tomografía Axial Computada, donde la innovación y la precisión
          se unen para ofrecerte un servicio de diagnóstico médico de última generación.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Excelencia Tecnológica</p>
        <p className="p__opensans">En nuestro centro, empleamos tomografías multislice,
          con y sin contraste, para obtener imágenes de alta resolución que permiten a
          nuestros médicos especialistas analizar tu salud con la máxima precisión.
          Nuestro compromiso con la excelencia tecnológica garantiza que cada estudio sea
          realizado con la mayor calidad posible.</p>
        <img src={pc} alt="sign_image" />
      </div>
    </div>

  </div>
);

export default Chef;
