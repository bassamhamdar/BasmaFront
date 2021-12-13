import React from "react";
import check from "../../../images/checkmark.svg";
import phone_image3 from "../../../images/thumb-4.png";
import "./style.css";
export const Third = () => {
  return (
    <div className="section-3">
      <div className="section-3__text">
        <h1>Share your photos with friends easily</h1>
        <div className="section-3__points">
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sit ametsit
          </p>
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sit ametsit amet.
          </p>
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sit ametsit amet.
          </p>
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sit ametsit amet.
          </p>
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, sit ametsit amet.
          </p>
          <button className="">Learn More</button>
        </div>
      </div>
      <div className="section-3__img">
        <img src={phone_image3} alt="phone" className="section-3_phone" />
      </div>
    </div>
  );
};
