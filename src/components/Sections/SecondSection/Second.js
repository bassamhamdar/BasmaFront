import React from "react";
import phone_image2 from "../../../images/thumb-2.png";
import check from "../../../images/checkmark.svg";
import bell from "../../../images/bell.jpeg";
import msg from "../../../images/message.png";
import vid from "../../../images/video.png";
import "./style.css";
export const Second = () => {
  return (
    <div className="Section-2">
      <div className="image">
        <div>
          <img src={phone_image2} alt="phone" className="section-2_phone" />
        </div>
      </div>
      <div className="Section-2__text">
        <h1>Work faster with powerful tools</h1>
        <div className="points">
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, qui.
          </p>
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, qui.
          </p>
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, qui.
          </p>
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, qui.
          </p>
          <img src={check} alt="check" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, qui.
          </p>
        </div>
        <div className="Section-2__icons">
          <img src={bell} alt="bell" className="section-2__icon1" />
          <img src={msg} alt="message" className="section-2__icon2" />
          <img src={vid} alt="camera" className="section-2__icon3" />
        </div>
      </div>
    </div>
  );
};
