import { ISignUp } from "../../models/interfaces";
import {
  GET_SIGNUP_CRETEDENTIALS,
  SET_SIGNUP_CRETEDENTIALS,
} from "../action-types";

const initialState: ISignUp = {
  id: "",
  name: "",
  lastName: "",
  phone: "",
  email: [],
  username: "",
  password: "",
};

export const singUpReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
): ISignUp => {
  switch (type) {
    case SET_SIGNUP_CRETEDENTIALS:
      return {
        ...state,
        ...payload,
      } as ISignUp;

    case GET_SIGNUP_CRETEDENTIALS:
      return state;

    default:
      return state;
  }
};
