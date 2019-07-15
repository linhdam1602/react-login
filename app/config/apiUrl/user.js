import envConfig from 'config/environment';

const { host } = envConfig.api;

/*
 * POST
 * User Login
 */
export const postUserLoginURL = () => `${host}/v1/auth/login`;

/*
 * POST
 * User Logout
 */
export const postUserLogoutURL = () => `${host}/v1/auth/logout`;

/*
 * GET
 * User info
 */
export const getUserInfoURL = () => `${host}/v1/user/info`;

/*
 * POST
 * Refresh token
 */
export const postRefreshToken = () => `${host}/v1/auth/refresh-token`;

/*
 * POST
 * Forgot password
 */
export const postForgotPasswordURL = () => `${host}/v1/auth/forgot`;

/*
 * POST
 * Check token
 */
export const postCheckResetTokenURL = () => `${host}/v1/auth/check-token`;

/*
 * POST
 * Check token
 */
export const postResetPasswordURL = () => `${host}/v1/auth/resetPassword`;

/*
 * POST
 * Change password
 */
export const postChangePasswordURL = () => `${host}/v1/user/change-my-password`;
