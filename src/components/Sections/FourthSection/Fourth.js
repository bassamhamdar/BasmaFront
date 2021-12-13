import React from "react";
import download from "../../../images/download.png";
import setting from "../../../images/settings.png";
import app from "../../../images/app.png";
import "./style.css";
export const Fourth = () => {
  return (
    <div className="section-4">
      <div className="section-4__text">
        <h1 className="section-4__text__h1">Code Challenge</h1>
        <p className="section-4__text__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat
          vitae quod consectetur exercitationem nulla sequi qui cupiditate
          doloribus asperiores?
        </p>
      </div>
      <div className="section-4__flex">
        <div className="section-4__flex__col">
          <img src={download} alt="download" className="section-4__img" />
          <h3>Install the app</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            atque dolore quidem, cum fugit debitis.
          </p>
        </div>
        <div className="arrow_flex">
          <div className="arrow">{">"}</div>
        </div>
        <div className="section-4__flex__col">
          <img src={setting} alt="setting" className="section-4__img" />
          <h3>Setup your profile</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro
            eveniet itaque pariatur excepturi fugit.
          </p>
        </div>
        <div className="arrow_flex">
          <div className="arrow">{">"}</div>
        </div>
        <div className="section-4__flex__col">
          <img src={app} alt="app" className="section-4__img" />
          <h3>Enjoy the features</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            corrupti doloremque eius iusto ut officia?
          </p>
        </div>
      </div>
    </div>
  );
};
