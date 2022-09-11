import "../css/form.css";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import React, { useState } from "react";
import { login } from "../services/loginService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    mutateAsync: afterLogin,
    isLoading,
    error,
    isError,
    data,
  } = useMutation(login);

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    afterLogin(
      { email, password },
      {
        // onSuccess: () => navigate("/products"),
        onError: (error: any) => {
          toast.error("🦄 Wow so easy!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.log(error.response?.data.message);
        },
      }
    );
  };
  return (
    <div>
      <Navbar />
      <div className="form__container container">
        <form action="" method="Post">
          <div className="input__wrapper">
            <p className="form_text">
              Dont Have an account?<NavLink to="/signup">Sign Up</NavLink>
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
          <ToastContainer />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
