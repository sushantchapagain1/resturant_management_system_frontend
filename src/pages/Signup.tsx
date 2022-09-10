import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="form__container container">
        <form action="" method="Post">
          <div className="input__wrapper">
            <p className="form_text">
              Already Have an account?<NavLink to="/login">Log in</NavLink>
            </p>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
