import React from "react";

export const Nav = () => {
  return (
    <div className="menu">
      <div className="burger">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pages</li>
        <li>Screenshots</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
