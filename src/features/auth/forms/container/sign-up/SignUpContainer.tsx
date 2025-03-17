import React, { JSX, useEffect } from "react";
import SingUpComponent from "../../ui/sign-up/SingUpComponent";
import { useInput, useLocalStorage } from "../../../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { IAction, ISignUp } from "../../../../../models/interfaces";
import { setSignUpAction } from "../../../../../redux/actions/sign-up.actions";
import { v4 } from "uuid";
import { useNavigate } from "react-router";

const SignUpContainer = (): JSX.Element => {
  const { i, memoizedChangeV, reset } = useInput({
    id: "",
    name: "",
    lastName: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  const { l, addItem, getItem, removeItem, clear } = useLocalStorage(
    "signup",
    {}
  ); // Initialize local storage with the [signup] values. [inicializar]

  const nav = useNavigate();

  // With this we can [dispatch] an [action-IAction type] with the interface [ISingUp]
  const d = useDispatch<Dispatch<IAction>>();
  // const { signup } = useSelector((state: { signup: ISignUp }) => state);

  const handleSignup = (e: any) => {
    // TODO: implement the validation process.
    e.preventDefault();
    const u = { ...i, id: v4() };
    d(setSignUpAction(u)); // Dispatch the new [user]
    addItem("user-".concat(i.name, "-", i.lastName).trim(), u); // Register the [user] at window.localStorage
    reset();
    nav("/home");

    // TODO: additional notes. Here the challanges is implemet a compose function with validators etc.
    // compose(f(1), f(2), f(3)

    window.alert(`User with name ${i.name} was created successfully`);
  };
  return (
    <SingUpComponent
      {...i}
      onSetV={memoizedChangeV}
      onSubmitForm={handleSignup}
    />
  );
};

export default SignUpContainer;
