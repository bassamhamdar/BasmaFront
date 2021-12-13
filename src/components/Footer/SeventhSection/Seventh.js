import React from "react";
import "./style.css";
export const Seventh = () => {
  return (
    <div className="section-7">
      <div className="section-7__text">
        <div className="section-7__h1">
          <h1>Subscribe to get updates</h1>
        </div>
        <div className="section-7__p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quod porro aliquam! Aliquid hic sint nulla, illum at voluptas sed.
          </p>
        </div>
      </div>
      <form className="section-7__form">
        <input
          type="text"
          className="section-7__input"
          placeholder="Enter your email"
        />
        <input type="submit" value="Subscribe" className="section-7__btn" />
      </form>
    </div>
  );
};
