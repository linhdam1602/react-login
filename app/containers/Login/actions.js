import { LOGIN_ACTION } from "./constants";

export const loginAction = (values, callbacks) => ({
  type: LOGIN_ACTION,
  values,
  callbacks
});
