import { IAuth } from "../../models/interfaces";
import {
  GET_AUTH_CREDENTIALS,
  SET_AUTH_CREDENTIALS,
} from "../action-types/index";

const initialState: IAuth = {
  username: "",
  password: "",
};

export const loginReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): IAuth => {
  switch (type) {
    case SET_AUTH_CREDENTIALS:
      return {
        ...state,
        ...payload,
      };

    case GET_AUTH_CREDENTIALS:
      return state;

    default:
      return state;
  }
};
