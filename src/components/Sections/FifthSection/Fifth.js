import React from "react";
import bike1 from "../../../images/bike.png";
import bike2 from "../../../images/motorbike.png";
import "./style.css";
export const Fifth = () => {
  return (
    <div className="section-5">
      <div style={{ marginTop: "3rem" }}>
        <h1 style={{ textAlign: "center" }}>Basma Code Challenge</h1>
        <hr style={{ width: "40px", color: "blue" }}></hr>
        <p
          style={{
            textAlign: "center",
            width: "50%",
            margin: "auto",
            marginBottom: "3rem",
            color: "grey",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          voluptates porro rerum nostrum animi.
        </p>
      </div>

      <div className="section-5__flex">
        <div className="section-5__card">
          <div className="section-5__fisrt-part">
            <div>
              <img width="50px" src={bike1} alt="bike"></img>
            </div>
            <div className="section-5__first-part__title">
              <span>basic</span>
            </div>
            <div className="section-5__first-part__price">
              <span style={{ fontSize: "20px" }}>$</span>
              <span>129</span>
            </div>
          </div>
          <div>
            <ul className="section-5__ul">
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>{" "}
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>{" "}
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>{" "}
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="sectio-5__button">
            <button
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #5336de, 50%, #8a3ee8)",
                border: "none",
                height: "2rem",
                width: "6rem",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="section-5__card">
          <div className="section-5__fisrt-part">
            <div>
              <img width="50px" src={bike2} alt="bike"></img>
            </div>
            <div className="section-5__first-part__title">
              <span>pro</span>
            </div>
            <div className="section-5__first-part__price">
              <span style={{ fontSize: "20px" }}>$</span>
              <span>46</span>
            </div>
          </div>
          <div>
            <ul className="section-5__ul">
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>{" "}
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>{" "}
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>{" "}
              <hr className="hr-color" />
              <li className="section-5_li">Lorem, ipsum dolor.</li>
            </ul>
          </div>
          <div className="sectio-5__button">
            <button
              style={{
                backgroundColor: "rgba(108, 44, 226, 255)",
                border: "none",
                height: "2rem",
                width: "6rem",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="section-5__footer">
        <p>not sure what to choose? contact us</p>
      </div>
    </div>
  );
};
