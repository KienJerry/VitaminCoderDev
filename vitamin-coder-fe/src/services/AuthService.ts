// import type {
//   ReqCreateAccount,
//   ReqForgotPassword,
//   ReqLogin,
//   ReqLoginSocial,
//   ReqResetPassword,
// } from "@/interfaces/auth.interface";
import { api } from "@/utils/axios.configs";

const AUTH_PATH = "/Auth";
const CHECK_PATH = "/pet";

const AuthService = {
  // create: (body: ReqCreateAccount) => {
  //   return api.post(`${AUTH_PATH}/Learner/Create`, body);
  // },
  login: (body: any) => {
    return api.get(`${CHECK_PATH}/findByStatus?status=${body}`);
  },
  // login: (body: ReqLogin) => {
  //   return api.post(`${AUTH_PATH}/Login`, body);
  // },
  // loginSocial: (body: ReqLoginSocial) => {
  //   return api.post(`${AUTH_PATH}/LoginSocial`, body);
  // },
  // forgotPassword: (body: ReqForgotPassword) => {
  //   return api.post(`${AUTH_PATH}/ForgotPassword`, body);
  // },
  // resetPassword: (body: ReqResetPassword) => {
  //   return api.post(`${AUTH_PATH}/ResetPassword`, body);
  // },
};

export default AuthService;
