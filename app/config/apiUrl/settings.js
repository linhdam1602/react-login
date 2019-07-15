import envConfig from 'config/environment';
// import { stringifyParams } from 'utils/common';

const { host } = envConfig.api;

/*
 * GET
 * Payment setting
 */
export const getPaymentSettingURL = () => `${host}/v1/setting/payment`;

/*
 * POST
 * Save payment setting
 */
export const postSavePaymentSettingURL = () => `${host}/v1/setting/payment`;

/*
 * GET
 * Setting detail
 */
export const getSettingDetailURL = (key) => `${host}/v1/setting/detail/${key}`;

/*
 * GET
 * FAQs
 */
export const getFAQsURL = () => `${host}/v1/faqs`;

/*
 * POST
 * Add setting
 */
export const postAddSettingURL = () => `${host}/v1/setting/add`;

/*
 * POST
 * Edit setting
 */
export const postEditSettingURL = () => `${host}/v1/setting/edit`;

/*
 * GET
 * Payment setting public
 */
export const getPublicPaymentSetting = () =>
  `${host}/v1/setting/payment/public`;
