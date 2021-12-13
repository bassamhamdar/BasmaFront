import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterContext from "../../Context/registerContext";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

export const Register = () => {
  const [verified, setVerified] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must Contain 8 characters, one uppercase, One Lowercase, One number and one special case character"
      ),
    email: yup.string().email("Invalid email format").required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const {
    actions: { RegisterCustomer },
  } = useContext(RegisterContext);

  const onSubmit = (data) => {
    RegisterCustomer(data);
    reset();
  };
  const check = () => {
    setVerified(true);
  };
  return (
    <div className="register-section">
      {console.log(localStorage.getItem("auth"))}
      <div className="design"></div>
      <form
        className="register__form"
        onSubmit={
          verified ? handleSubmit(onSubmit) : alert("Check ReCAPTCHA box")
        }
      >
        <input
          type="text"
          className="register__input"
          placeholder="Name"
          {...register("name")}
        />
        <input
          type="text"
          className="register__input"
          placeholder="Email"
          {...register("email")}
        />

        <input
          type="password"
          className="register__input"
          placeholder="Password"
          {...register("password")}
        />
        <input type="submit" value="Sign up" className="register__btn" />
        <ReCAPTCHA
          sitekey="6LdJOp0dAAAAAL1P-H_AFw94D6EzyJ63yMw8lo_0"
          onChange={check}
        />
        <p className="error">{errors.name?.message}</p>
        <p className="error"> {errors.email?.message}</p>
        <p className="error"> {errors.password?.message}</p>
      </form>
    </div>
  );
};
