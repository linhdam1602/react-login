import sanitizeHtml from 'sanitize-html';
import moment from 'moment';
import queryString from 'query-string';

import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

/**
 * Get file extension from URL
 */
export const getFileExtension = (url) =>
  queryString
    .parseUrl(url || '')
    .url.split('.')
    .pop()
    .toLowerCase();

/**
 * Get confirm message when delete any item
 */
export const getDeleteConfirmMessage = (entityName, pageName) => {
  const name = globalMessages[entityName]
    ? formatMessage(globalMessages[entityName]).toLowerCase()
    : `${entityName}`.toLowerCase();

  if (pageName)
    return formatMessage(globalMessages.deleteConfirmIsInUsed, {
      name,
      page: formatMessage(globalMessages[pageName]).toLowerCase(),
    });

  return formatMessage(globalMessages.deleteConfirmationWithItemName, {
    name,
  });
};
/**
 * get search params
 */
export const getCurrentSearchParams = () =>
  queryString.parse(window.location.search.replace('?', ''));

/**
 * Re-format date string
 */
export const reFormatDate = (
  dateString = '',
  originalFormat = '',
  newFormat = '',
) => moment(dateString, originalFormat).format(newFormat);

/**
 *
 * Check if current `pathname` is match with route config
 */

export const isMatchRoute = (pathname, routeConfig) => {
  const routeArray = routeConfig.split('/');
  const currentPathnameArray = pathname.split('?')[0].split('/');

  if (routeArray.length !== currentPathnameArray.length) return false;

  let isMatch = true;

  currentPathnameArray.forEach((pathEle, index) => {
    // param started with `:`
    if (pathEle[0] !== ':' && pathEle !== routeArray[index]) {
      isMatch = false;
    }
  });

  return isMatch;
};
/**
 * Purify html content
 */
export const purifyHtml = (value) =>
  sanitizeHtml(value, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      ...['h1', 'h2', 'img', 'span', 'sup', 'br'],
    ],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'width', 'height', 'alt'],
      '*': ['style'],
    },
  });

/**
 * Capitalize first letter
 * @param {string} string
 */
export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Format number
 *
 * @param {number} value
 * @param {string} symbol
 */
export const formatNumber = (value, symbol) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `${symbol}`);

/**
 * Remove all html tag in string
 *
 * @param {string} html
 */
export const stripHtml = (html) => (html || '').replace(/<\/?[^>]+(>|$)/g, '');

/**
 * Normalize data for redux-form fields
 * InputField, SelectField, ....
 */
const normalizer = (value, valueForTrue) => {
  if (value === null || value === false) {
    return '';
  }

  if (value === true) {
    return valueForTrue;
  }

  // if array (multi-select, FieldArray)
  if (Array.isArray(value)) {
    return value.map((item) => item.id || item.value || item);
  }

  // if select-option
  if (typeof value === 'object' && value.value !== undefined) {
    return value.value;
  }

  // if datepicker
  if (typeof value === 'string' && /^\d{2} [a-zA-Z]{3} \d{4}$/.test(value)) {
    return moment(value, 'DD MMM YYYY').format('DD/MM/YYYY');
  }

  // trim string
  if (typeof value === 'string') {
    return value.trim();
  }

  return value;
};

const normalizeParamKey = (paramName) =>
  paramName
    .replace(/ /g, '')
    .replace(/\(/g, '[')
    .replace(/\)/g, ']');

export const normalizeFormValues = (values = {}, valueForTrue = '1') => {
  const finalValues = {};

  Object.keys(values).forEach((key) => {
    finalValues[normalizeParamKey(key)] = normalizer(values[key], valueForTrue);
  });

  return finalValues;
};

export const stringifyParams = (params, options = {}) =>
  queryString.stringify(params, {
    arrayFormat: 'bracket',
    ...options,
  });

export const getBase64 = async (file, callback) => {
  let base64String = '';

  base64String = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      base64String = reader.result;
      if (callback) {
        callback(reader.result);
      }
      resolve(reader.result);
    };
    reader.onerror = (error) => reject(error);
  });

  return base64String;
};
