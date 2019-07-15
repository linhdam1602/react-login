import envConfig from 'config/environment';
import { stringifyParams } from 'utils/common';

const { host } = envConfig.api;

/*
 * GET
 * List Staffs
 */
export const getListStaffsURL = (params) =>
  `${host}/v1/staff/list?${stringifyParams(params)}`;

/*
 * POST
 * Add Staff
 */
export const postAddStaffURL = () => `${host}/v1/staff/create`;

/*
 * POST
 * Edit Staff
 */
export const postEditStaffURL = () => `${host}/v1/staff/update`;

/*
 * GET
 * Staff details
 */
export const getStaffDetailsURL = (id) => `${host}/v1/staff/${id}/detail`;

/*
 * GET
 * Change Staff status
 */
export const getChangeStaffStatusURL = (id) =>
  `${host}/v1/staff/change-status?staff_id=${id}`;

/*
 * POST
 * Delete Staff
 */
export const postDeleteStaffURL = () => `${host}/v1/staff/delete`;

/*
 * POST
 * Change staff password
 */
export const postChangeStaffPasswordURL = () =>
  `${host}/v1/staff/change-password`;
