import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { signup } from "../services/loginService";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    mutateAsync: signUpmutateHandler,
    isLoading,
    data,
  } = useMutation(signup);

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signUpmutateHandler(
      { name, email, password },
      {
        onSuccess: () => {
          toast.success("User Created Succesfully");
        },
        onError: (err: any) => {
          toast.error(err.response?.data.message);
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
              Already Have an account?<NavLink to="/login">Log in</NavLink>
            </p>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
