import React, { JSX } from "react";
import { Link } from "react-router";
import "./LoginComponent.scss";
import { Logo } from "../../../../components/ui/logo/Logo";
import RegisterGroupComponent from "../../../../components/utils/sign-group/RegisterGroupComponent";
const LoginComponent = ({
  username,
  password,
  onChangeV,
  onSubmitForm,
}: {
  username: string;
  password: string;
  onChangeV: (k: string, v: any) => void;
  onSubmitForm: (e: any) => void;
}): JSX.Element => {
  return (
    <section className="login-form">
      <form method="post" onSubmit={(e) => onSubmitForm(e)}>
        <Logo w="116" />
        <h1 className="login-title">Login Form</h1>
        <fieldset>
          <div className="username">
            <input
              type="text"
              className="username-input"
              name="username"
              onChange={(e) => onChangeV(e.target.name, e.target.value)}
              placeholder="username"
            />
          </div>
          <div className="password">
            <input
              type="password"
              className="pwd-input"
              name="pwd"
              onChange={(e) => onChangeV(e.target.name, e.target.value)}
              placeholder="password"
            />
          </div>
          <div className="forget-password">
            <Link to="/home">Forget Password</Link>
          </div>
          <div className="login">
            <button className="btn__login" onClick={onSubmitForm}>
              login
            </button>
          </div>
        </fieldset>

        <div className="register">
          <span>Don't have an account yet?</span>
          <span>
            <Link to="/register">register</Link>
          </span>
        </div>
        <div className="line-break">or</div>


        <RegisterGroupComponent />
      </form>
    </section>
  );
};

export default LoginComponent;
