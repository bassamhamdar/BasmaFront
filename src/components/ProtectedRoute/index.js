import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Register } from "../Register";
import { RegisterProvider } from "../../Context/RegisterProvider";

export const ProtectedRoute = () => {
  let auth = localStorage.getItem("auth");
  let navigate = useNavigate();
  if (auth === null || auth === undefined) {
    return <Register />;
  }
  return <Outlet />;
};
