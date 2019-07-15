/**
 * Request options creators for GET, POST, DELETE, PATCH
 */

import { select } from 'redux-saga/effects';
import moment from 'moment-timezone';

import { makeSelectAccessToken } from 'containers/App/selectors';

/**
 * Create default header params
 */
function* createBaseHeaders(token) {
  const storeToken = yield select(makeSelectAccessToken());

  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token || storeToken}`,
    Timezone: moment.tz.guess(),
    'X-Requested-With': 'XMLHttpRequest',
  };

  return headers;
}

export function* getOptions(token) {
  const headers = yield* createBaseHeaders(token);

  return {
    method: 'GET',
    headers,
  };
}

export function* postOptions(body = {}, token) {
  const headers = yield* createBaseHeaders(token);

  return {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

export function* deleteOptions(body = {}, token) {
  const headers = yield* createBaseHeaders(token);

  return {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  };
}

export function* postOptionsFormData(body = {}, token) {
  const headers = yield* createBaseHeaders(token);
  const formData = yield* createFormData(body);

  return {
    method: 'POST',
    headers,
    body: formData,
  };
}

export function* patchOptionsFormData(body = {}, token) {
  const headers = yield* createBaseHeaders(token);
  const formData = yield* createFormData(body);

  return {
    method: 'PATCH',
    headers,
    body: formData,
  };
}

/**
 * Create form data from object
 * @param {Object} object
 */
function* createFormData(object) {
  if (typeof object !== 'object') return object;

  const formData = new FormData();

  // create request body as FormData
  Object.keys(object).forEach((key) => {
    let value = object[key];
    if (value === undefined || value === null || value === false) value = '';

    if (Array.isArray(value)) {
      value.forEach((item) => {
        formData.append(key.includes('[]') ? key : `${key}[]`, item);
      });
    } else {
      formData.append(key, value);
    }
  });

  return formData;
}
