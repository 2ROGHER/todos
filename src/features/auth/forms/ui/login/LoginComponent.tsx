import React, { JSX } from "react";
import { Link } from "react-router";

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
    <>
      <h1>Login form</h1>
      <form method="post" onSubmit={(e) => onSubmitForm(e)}>
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
        </fieldset>

        <div className="login">
          <button className="btn__login" onClick={onSubmitForm}>
            login
          </button>
        </div>

        <div className="forget-pasword">
          <Link to="/home">Forget Password</Link>
        </div>

        <div className="register">
          <Link to="/sign-up">Don't have any account, register here!</Link>
        </div>

        <div className="register-group">
          <span><h2>Or register with: </h2></span>
          <div><button>facebook</button></div>
          <div><button>google</button></div>
          <div><button>github</button></div>
        </div>
      </form>
    </>
  );
};

export default LoginComponent;
