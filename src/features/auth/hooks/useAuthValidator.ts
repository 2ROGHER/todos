import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { IAuth, ISignUp } from "../../../models/interfaces";

// Hook genérico para validar autenticación
export const useAuthValidator = <T extends IAuth>() => {
  const [l, setL] = useState(false);
  const nav = useNavigate();
  const { username, password } = useSelector(
    (state: { signup: ISignUp }) => state.signup
  );

  

    // TODO: Implement the mapping function to map the localStorage.
  const validator = useCallback(
    (credentials: T, redirectPath: string = "/home") => {
      console.log("Validator execution started");
      setL(true);

      try {
        if (
          username === credentials.username &&
          password === credentials.password
        ) {
          setTimeout(() => {
            window.sessionStorage.setItem("login", JSON.stringify(credentials));
            nav(redirectPath);
          }, 2000);
          window.alert(`Login successful`);
        } else {
          console.error("Login failed: invalid credentials");
        }
      } catch (error) {
        console.error(`Validation error: ${error}`);
      } finally {
        setL(false);
      }
    },
    [username, password, nav]
  );

  return { validator, l };
};
