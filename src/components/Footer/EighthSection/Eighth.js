import React from "react";
import home from "../../../images/form-house.svg";
import phone from "../../../images/form-phone.svg";
import mail from "../../../images/form-mail.svg";
import "./style.css";
export const Eighth = () => {
  return (
    <div className="section-8">
      <div className="section-8__text">
        <div className="section-8__h1">
          <h1>Stay tuned</h1>
        </div>
        <div className="section-8__p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi
            officiis libero amet animi porro voluptatum quidem, similique
            tempore alias!
          </p>
        </div>
      </div>
      <div className="section-8__flex">
        <div className="section-8__left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ipsum asperiores maxime, aliquam eius, reiciendis, dolore aspernatur
            recusandae quo dolor tempora ab sequi dicta iste reprehenderit
            eveniet?
          </p>
          <div className="section-8__left__list">
            <div className="section-8__left__list-row">
              <img src={home} alt="home" className="section-8__icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, sequi.
              </p>
            </div>
            <div className="section-8__left__list-row">
              <img src={phone} alt="phone" className="section-8__icon" />
              <p>+1 230 456 256-456 478 897</p>
            </div>
            <div className="section-8__left__list-row">
              <img src={mail} alt="mail" className="section-8__icon" />
              <p>example@domain.com</p>
            </div>
          </div>
        </div>
        <form className="section-8__right">
          <input type="text" placeholder="Name" className="section-8__input" />
          <input type="text" placeholder="email" className="section-8__input" />
          <input
            type="text"
            placeholder="Subject"
            className="section-8__input"
          />
          <textarea
            className="section-8__textarea"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Submmit" className="section-8__btn" />
        </form>
      </div>
    </div>
  );
};
