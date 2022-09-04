import "./Form.css";
export const LoginForm = () => {
  return (
    <div className="form__container container">
      <form action="" method="Post">
        <div className="input__wrapper">
          <p className="form_text">
            Dont Have an account?<a href="#">Sign Up</a>
          </p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
};
