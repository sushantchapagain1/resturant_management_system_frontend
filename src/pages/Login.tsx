import "../css/form.css";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useState } from "react";
import { login } from "../services/loginService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <Navbar />
      <div className="form__container container">
        <form action="" method="Post">
          <div className="input__wrapper">
            <p className="form_text">
              Dont Have an account?<a href="#">Sign Up</a>
            </p>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin}>
              Log in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
