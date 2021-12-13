import React from "react";
import { Outlet } from "react-router-dom";
import { Register } from "../Register";
import { RegisterProvider } from "../../Context/RegisterProvider";

export const ProtectedRoute = () => {
  let auth = localStorage.getItem("auth");

  return auth ? <Outlet /> : <Register />;
};
