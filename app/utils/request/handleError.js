import { put } from 'redux-saga/effects';
import { notification } from 'antd';

import formatMessage from 'containers/LanguageProvider/formatMessage';
import { refreshToken } from 'containers/AuthPages/Login/actions';

import globalMessages from 'containers/App/messages';

/**
 * redux-saga middleware to handle request error
 *
 * @param  {string} errMsg A error message to be displayed
 * @param  {string} errCode A error code response from server ['access_denied', ...]
 *
 */

export default function* handleError(responseError) {
  if (
    (responseError.message.includes('expired') && responseError.code === 401) ||
    responseError.message.includes('Unauthenticated.')
  ) {
    notification.destroy();
    yield put(refreshToken());
    return;
  }

  notification.error({
    message: formatMessage(globalMessages.error),
    description: responseError.message,
  });
}
