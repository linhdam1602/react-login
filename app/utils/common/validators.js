import moment from 'moment';

/**
 *
 *  Validate valid email or not
 *
 * @param {string} email
 */
export function isValidEmail(email) {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  if (!regEx.test(email)) {
    return false;
  }
  return true;
}

/**
 *
 *  Validate valid password or not
 *
 * @param {string} password
 */
export function isValidPassword(password) {
  const regEx = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/; // eslint-disable-line
  if (!regEx.test(password)) {
    return false;
  }
  return true;
}

/**
 *
 *  Validate has value or not
 *
 * @param {any} value
 */

export function isHasValue(value) {
  if (value === null || value === undefined) return false;

  // validate input string
  if (typeof value === 'string' && value.trim().length === 0) return false;

  // validate select-option
  if (typeof value === 'object' && !value.value && !value.label) return false;

  // validate empty array
  if (typeof value === 'object' && Array.isArray(value) && value.length === 0)
    return false;

  return true;
}

/**
 * Validate valid URL format
 *
 * @param {string} url
 */
export function isURL(url) {
  const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/; //eslint-disable-line
  return re.test(url);
}

/**
 * Validate time end >= time start
 *
 * @param {string} startTime, endTime
 */
export function validateTimeBeginAndAfter(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(':');
  const [endHour, endMinute] = endTime.split(':');

  if (
    parseInt(endHour, 10) < parseInt(startHour, 10) ||
    (parseInt(endHour, 10) === parseInt(startHour, 10) &&
      parseInt(endMinute, 10) < parseInt(startMinute, 10))
  ) {
    return false;
  }

  return true;
}

/**
 * Validate date end >= date start
 *
 * @param {string} startTime, endTime
 */
export function validateDateBeginAndAfter(
  startDate,
  endDate,
  timeFormat = 'DD MMM YYYY',
) {
  const startMoment = moment(startDate, timeFormat);
  const endMoment = moment(endDate, timeFormat);

  if (endMoment.isBefore(startMoment)) {
    return false;
  }

  return true;
}

/**
 * Validate phone number
 *
 * @param {string} value
 */
export function isValidPhoneNumber(value) {
  return /^[\d # + * ]+$/.test(value);
}
