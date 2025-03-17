/**
 * Here let's create all [actions creators] to dispatch action-objects to reducer to manage the [singup] state.
 */

import { IAction, IAuth, ISignUp } from "../../models/interfaces/index";
import {
  GET_SIGNUP_CRETEDENTIALS,
  SET_SIGNUP_CRETEDENTIALS,
} from "../action-types";

export const setSignUpAction = (s: ISignUp): IAction => ({
  type: SET_SIGNUP_CRETEDENTIALS,
  payload: s,
});

export const getSignUpAction = (): IAction => ({
  type: GET_SIGNUP_CRETEDENTIALS,
});
