import envConfig from 'config/environment';
import { stringifyParams } from 'utils/common';

const { host } = envConfig.api;

/*
 * GET
 * List Services
 */
export const getListServicesURL = (params) =>
  `${host}/v1/service/list?${stringifyParams(params)}`;

/*
 * POST
 * Add Service
 */
export const postAddServiceURL = () => `${host}/v1/service/add`;

/*
 * POST
 * Edit Service
 */
export const postEditServiceURL = () => `${host}/v1/service/edit`;

/*
 * GET
 * Service details
 */
export const getServiceDetailsURL = (params) =>
  `${host}/v1/service/view?${stringifyParams(params)}`;

/*
 * POST
 * Change service status
 */
export const postChangeServiceStatusURL = () => `${host}/v1/service/status`;

/*
 * POST
 * Delete service
 */
export const postDeleteServiceURL = () => `${host}/v1/service/delete`;
