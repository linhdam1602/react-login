import { call, select, take } from 'redux-saga/effects';

import { makeSelectCurrentCompany } from 'containers/App/selectors';
import { typeAPISuccess } from 'utils/api/constants';
import { REFRESH_TOKEN } from 'containers/AuthPages/Login/constants';

import request from './request';
import {
  getOptions,
  postOptions,
  deleteOptions,
  postOptionsFormData,
  patchOptionsFormData,
} from './options';
import handleError from './handleError';

/**
 * @param {string} url
 */
export function* GET(url, token) {
  const options = yield* getOptions(token);
  const currentCompany = yield select(makeSelectCurrentCompany());

  let response;

  const [baseURL, query] = url.split('?');
  const shouldAddDefaultCompanyId = !(query || '').includes('company_id');

  const companyIdParam = `company_id=${currentCompany.id || ''}`;

  const requestURL = ''.concat(
    baseURL,
    `?${query || ''}`,
    shouldAddDefaultCompanyId ? `${query ? '&' : ''}${companyIdParam}` : '',
  );

  try {
    response = yield call(request, requestURL, options);
  } catch (error) {
    yield* handleError(error);

    // if revoke token, retry to call API
    if (error.error === `access_denied` || error.code === 403) {
      const tokens = yield take(typeAPISuccess(REFRESH_TOKEN));
      const res = yield GET(url, tokens.accessToken);
      return res;
    }

    throw error;
  }

  return response;
}

/**
 * POST with ContentType: "application/json"
 * @param {string} url
 * @param {Object} body
 */
export function* POST(url, body, accessToken) {
  const options = yield* postOptions(body, accessToken);
  let response;

  try {
    response = yield call(request, url, options);
  } catch (error) {
    yield* handleError(error);

    // if revoke token, retry to call API
    if (error.error === `access_denied` || error.code === 403) {
      const tokens = yield take(typeAPISuccess(REFRESH_TOKEN));
      const res = yield POST(url, body, tokens.accessToken);
      return res;
    }

    throw error;
  }

  return response;
}

/**
 * @param {string} url
 * @param {Object} body
 */
export function* DELETE(url, body, token) {
  const options = yield* deleteOptions(body, token);
  let response;

  try {
    response = yield call(request, url, options);
  } catch (error) {
    yield* handleError(error);

    // if revoke token, retry to call API
    if (error.error === `access_denied` || error.code === 403) {
      const tokens = yield take(typeAPISuccess(REFRESH_TOKEN));
      const res = yield DELETE(url, body, tokens.accessToken);
      return res;
    }

    throw error;
  }

  return response;
}

/**
 * POST form data with token
 * @param {string} url
 * @param {Object} body
 */
export function* POSTFormData(url, body, token) {
  try {
    const options = yield* postOptionsFormData(body, token);
    const response = yield call(request, url, options);
    return response;
  } catch (error) {
    yield* handleError(error);

    // if revoke token, retry to call API
    if (error.error === `access_denied` || error.code === 403) {
      const tokens = yield take(typeAPISuccess(REFRESH_TOKEN));
      const res = yield POSTFormData(url, body, tokens.accessToken);
      return res;
    }

    throw error;
  }
}

/**
 * POST form data with token
 * @param {string} url
 * @param {Object} body
 */
export function* PATCHFormData(url, body, token) {
  try {
    const options = yield* patchOptionsFormData(body, token);
    const response = yield call(request, url, options);
    return response;
  } catch (error) {
    yield* handleError(error);

    // if revoke token, retry to call API
    if (error.error === `access_denied` || error.code === 403) {
      const tokens = yield take(typeAPISuccess(REFRESH_TOKEN));
      const res = yield PATCHFormData(url, body, tokens.accessToken);
      return res;
    }

    throw error;
  }
}
