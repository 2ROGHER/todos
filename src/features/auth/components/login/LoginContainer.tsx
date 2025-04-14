import React, { useEffect } from "react";
import LoginComponent from "./LoginComponent";
import { useInput } from "../../../../hooks/useInput.hook";
import { useLocalStorage } from "../../../../hooks";
import { useSelector } from "react-redux";
import { useAuthValidator } from "../../hooks/useAuthValidator";

function LoginContainer() {
  const { i, memoizedChangeV, reset } = useInput({
    username: "",
    password: "",
  });
  const { validator, l } = useAuthValidator();

  console.log(i);

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: implement the function validation here.
    try {
      // implement the validation
      validator({ ...i }, '/home');
    } catch (error) {
      console.log(`Error during the validation process: ${error}`);
    }
  };

  useEffect(() => {}, []);
  return <LoginComponent
        {...i}
        onChangeV={memoizedChangeV}
        onSubmitForm={handleLogin}
      />
}

export default LoginContainer;
