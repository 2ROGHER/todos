import React, { JSX } from "react";

const SingUpComponent = ({
  name,
  lastName,
  phone,
  email,
  username,
  password,
  onSetV,
  onSubmitForm,
}: {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  onSetV: (k: string, v: any) => void;
  onSubmitForm: (e: any) => void;
}): JSX.Element => {
  return (
    <>
      <form action="" className="signup-form" onSubmit={(e) => onSubmitForm(e)}>
        <fieldset className="signup">
          <div className="name">
            <input
              type="text"
              className="name-input"
              value={name}
              onChange={(e) => onSetV(e.target.name, e.target.value)}
              name="name"
              placeholder="Jonh Monaco"
            />
          </div>

          <div className="lastName">
            <input
              type="text"
              className="lastName-input"
              value={lastName}
              onChange={(e) => onSetV(e.target.name, e.target.value)}
              name="lastName"
              placeholder="Doe Nadal"
            />
          </div>
          <div className="phone">
            <input
              type="text"
              className="phone-input"
              name="phone"
              value={phone}
              onChange={(e) => onSetV(e.target.name, e.target.value)}
              placeholder="942-349-483-23"
            />
          </div>
          <div className="mail">
            <input
              type="text"
              className="mail-input"
              name="mail"
              value={email}
              onChange={(e) => onSetV(e.target.name, e.target.value)}
              placeholder="johndoe@example.com"
            />
          </div>
        </fieldset>

        <fieldset className="auth-credentials">
          <div className="username">
            <input
              type="text"
              className="username-input"
              name="username"
              value={username}
              onChange={(e) => onSetV(e.target.name, e.target.value)}
              placeholder="input username"
            />
          </div>
          <div className="password">
            <input
              type="text"
              className="password-input"
              name="password"
              value={password}
              onChange={(e) => onSetV(e.target.name, e.target.value)}
              placeholder="input your password"
            />
          </div>
          <div className="password-repeat">
            <input
              type="text"
              className="password-repeat-input"
              name="password-repeat"
              value={password}
              onChange={(e) => onSetV(e.target.name, e.target.value)}
              placeholder="repeat you password"
            />
          </div>
        </fieldset>

        <div className="btn-group__singup">
          <button className="btn__sigup" onClick={onSubmitForm}>
            register
          </button>
        </div>
      </form>
    </>
  );
};

export default SingUpComponent;
