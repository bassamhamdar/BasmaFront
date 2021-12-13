import React from "react";
import "./style.css";
import google from "../../../images/google-play.png";
import appStore from "../../../images/app-store.png";
export const Sixth = () => {
  return (
    <div className="section-6">
      <div className="section-6__content">
        <div className="section-6__title">
          <h1>BASMA is availabe for all devices</h1>
        </div>
        <div className="section-6__p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            facere, nobis culpa dolorum ratione nulla repellat. Aliquam
            molestiae facere quis, sequi dolore doloribus, dolor nobis mollitia
            explicabo eligendi necessitatibus iusto?
          </p>
        </div>
        <div className="section-6__flex">
          <div className="section-6__flex1">
            <img src={google} alt="google store" className="section-6__img" />
          </div>
          <div className="section-6__flex2">
            <img src={appStore} alt="app store" className="section-6__img" />
          </div>
        </div>
        <div className="section-6__footer">
          <p>* Availabe on iphone, ipad and all andriod devices</p>
        </div>
      </div>
    </div>
  );
};
