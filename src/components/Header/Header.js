import React from "react";
import phone_image from "../../images/thumb-1.png";
import { Nav } from "./Nav";
export const Header = () => {
  return (
    <div className="Header_Section">
      {console.log(localStorage.getItem("auth"))}
      <div className="Nav">
        <Nav />
      </div>
      <div className="header__info">
        <h1>Creative way to Showcase your App</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          culpa at natus eveniet! Debitis deleniti sit nulla perferendis. culpa
          at natus eveniet! Debitis deleniti sit nulla perferendis.
        </p>
        <button className="header__btn">Get Started</button>
      </div>
      <img src={phone_image} alt="phone" className="double_phone_image" />
    </div>
  );
};
