/**
 * Here let's create all [actions creators] to dispatch action-objects to reducer to manage the [login] state.
 */

import { IAction, IAuth } from "../../models/interfaces/index";
import { GET_AUTH_CREDENTIALS, SET_AUTH_CREDENTIALS } from "../action-types";

export const setAuthCredentialsAction = (u: IAuth): IAction => ({
  type: SET_AUTH_CREDENTIALS,
  payload: u,
});

export const getAuthCredentialsAction = (): IAction => ({
  type: GET_AUTH_CREDENTIALS,
});
