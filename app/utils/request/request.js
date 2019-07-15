import 'whatwg-fetch';

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options).then(checkError);
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
async function checkError(response) {
  let resBody = await response.json();
  resBody = resBody || {};

  const error = {
    // error in text form (for outdated response standard)
    error:
      resBody.error || resBody.errors || (resBody.data && resBody.data.error),
    // error as error code (for new standard)
    code: resBody.code,
    message:
      resBody.message ||
      resBody.error_message ||
      (resBody.data && resBody.data.message) ||
      '',
  };

  if ((resBody.code && resBody.code !== 200) || resBody.status === 'ERROR') {
    throw error;
  }

  if (response.status >= 200 && response.status < 300) {
    return resBody;
  }

  throw error;
}

/**
 * Send request to 3rd party API
 * @param {*} url
 * @param {*} options
 */
export function request3rdAPI(url, options) {
  return fetch(url, options).then(parseJSON);
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}
