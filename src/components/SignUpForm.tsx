import "./Form.css";
export const SignUpForm = () => {
  return (
    <div className="form__container container">
      <form action="" method="Post">
        <div className="input__wrapper">
          <p className="form_text">
            Already Have an account?<a href="#">Log in</a>
          </p>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
