import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterContext from "./registerContext";
import axios from "axios";

export const RegisterProvider = ({ children }) => {
  let navigate = useNavigate();
  const RegisterCustomer = async (inputs) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:8000/api/customer/register",
        inputs,
        config
      );

      const data = response.data;
      console.log("data");
      if (data.success) {
        localStorage.setItem("auth", data.access_token);
        navigate("/");
      }
      if (!data.success) {
        throw new Error(data.message);
      }
    } catch (err) {}
  };
  const context = { actions: { RegisterCustomer } };
  return (
    <RegisterContext.Provider value={context}>
      {children}
    </RegisterContext.Provider>
  );
};
