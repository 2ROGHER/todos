import React, { JSX } from "react";
import RegisterGroupComponent from "../../../../components/utils/sign-group/RegisterGroupComponent";
import "./SignUp.scss";
import { Logo } from "../../../../components/ui/logo/Logo";

const SingUpComponent = ({
  name,
  lastName,
  phone,
  email,
  user,
  password,
  onSetV,
  onSubmitForm,
}: {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  user: string;
  password: string;
  onSetV: (k: string, v: any) => void;
  onSubmitForm: (e: any) => void;
}): JSX.Element => {
  return (
    <form action="" className="signup-form" onSubmit={(e) => onSubmitForm(e)}>
      <Logo w="116" />
      <h1 className="register-title">Register Form</h1>
      <fieldset className="signup">
        <div className="name">
          <input
            type="text"
            className="name-input"
            value={name}
            onChange={(e) => onSetV(e.target.name, e.target.value)}
            name="name"
            placeholder="*Jonh Monaco"
          />
        </div>

        <div className="lastName">
          <input
            type="text"
            className="lastName-input"
            value={lastName}
            onChange={(e) => onSetV(e.target.name, e.target.value)}
            name="lastName"
            placeholder="*Doe Nadal"
          />
        </div>
        <div className="phone">
          <input
            type="text"
            className="phone-input"
            name="phone"
            value={phone}
            onChange={(e) => onSetV(e.target.name, e.target.value)}
            placeholder="*942-349-483-23"
          />
        </div>
        <div className="email">
          <input
            type="text"
            className="email-input"
            name="email"
            value={email}
            onChange={(e) => onSetV(e.target.name, e.target.value)}
            placeholder="*johndoe@example.com"
          />
        </div>
      </fieldset>

      <fieldset className="auth-credentials">
        <div className="user">
          <input
            type="text"
            className="user-input"
            name="user"
            value={user}
            onChange={(e) => onSetV(e.target.name, e.target.value)}
            placeholder="*input username"
          />
        </div>
        <div className="password">
          <input
            type="text"
            className="password-input"
            name="password"
            value={password}
            onChange={(e) => onSetV(e.target.name, e.target.value)}
            placeholder="*input your password"
          />
        </div>
        <div className="password-repeat">
          <input
            type="text"
            className="password-repeat-input"
            name="password-repeat"
            value={password}
            onChange={(e) => onSetV(e.target.name, e.target.value)}
            placeholder="*repeat you password"
          />
        </div>
      </fieldset>

      <div className="btn-group__signup">
        <button className="btn__signup" onClick={onSubmitForm}>
          register
        </button>
      </div>

      <div className="line-break">or sign with</div>

      <RegisterGroupComponent />
    </form>
  );
};

export default SingUpComponent;
