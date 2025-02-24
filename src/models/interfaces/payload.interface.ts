import { PayloadAction } from "@reduxjs/toolkit";

export interface IPayload<T = any> extends PayloadAction<T> {
  payload: T;
}
