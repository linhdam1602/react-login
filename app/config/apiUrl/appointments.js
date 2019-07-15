import envConfig from 'config/environment';
import { stringifyParams } from 'utils/common';

const { host } = envConfig.api;

/*
 * GET
 * List Appointments
 */
export const getListAppointmentsURL = (params) =>
  `${host}/v1/appointments/list?${stringifyParams(params)}`;

/*
 * POST
 * Add Appointment
 */
export const postAddAppointmentURL = () => `${host}/v1/appointments/add`;

/*
 * POST
 * Edit Appointment
 */
export const postEditAppointmentURL = () => `${host}/v1/appointments/edit`;

/*
 * GET
 * Appointment details
 */
export const getAppointmentDetailsURL = (id) =>
  `${host}/v1/appointments/detail?id=${id}`;

/*
 * POST
 * Delete Appointment
 */
export const postDeleteAppointmentURL = () => `${host}/v1/appointments/delete`;

/*
 * GET
 * Appointment comment
 */
export const getAppointmentCommentURL = (params) =>
  `${host}/v1/appointments/comment/list?${stringifyParams(params)}`;

/*
 * POST
 * Change Appointment status
 */
export const changeAppointmentStatusURL = () =>
  `${host}/v1/appointments/change-status`;
