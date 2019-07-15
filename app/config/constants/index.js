/**
 * Common constants
 */
import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';
import colorConfig from 'config/style';

/**
 * First page when use pagination
 */
export const START_PAGE = 1;
export const LIMIT_DEFAULT = 10;

/**
 * Date format when display to user
 */
export const DISPLAY_DATE_FORMAT = 'DD MMM YYYY';

/**
 * Time format
 */
export const TIME_FORMAT = 'HH:mm';

/**
 * We services appointment status
 */
export const NEW_REQUEST_VALUE = 1;
export const ACCEPTED_VALUE = 2;
export const PENDING_REQUEST_VALUE = 3;
export const IN_PROGRESS_VALUE = 4;
export const PENDING_PAYMENT_VALUE = 5;
export const CLOSED_VALUE = 6;
export const CANCELLED_VALUE = 7;

export const NEW_REQUEST_OPTION = {
  value: NEW_REQUEST_VALUE,
  label: formatMessage(globalMessages.newRequest),
};
export const ACCEPTED_OPTIONS = {
  value: ACCEPTED_VALUE,
  label: formatMessage(globalMessages.accepted),
};
export const PENDING_REQUEST_OPTIONS = {
  value: PENDING_REQUEST_VALUE,
  label: formatMessage(globalMessages.pendingRequest),
};
export const IN_PROGRESS_OPTION = {
  value: IN_PROGRESS_VALUE,
  label: formatMessage(globalMessages.inProgress),
};
export const PENDING_PAYMENT_OPTION = {
  value: PENDING_PAYMENT_VALUE,
  label: formatMessage(globalMessages.pendingPayment),
};
export const CLOSED_OPTIONS = {
  value: CLOSED_VALUE,
  label: formatMessage(globalMessages.closed),
};
export const CANCELLED_OPTION = {
  value: CANCELLED_VALUE,
  label: formatMessage(globalMessages.cancelled),
};

export const SERVICE_APPOINTMENT_STATUS_OPTIONS = [
  NEW_REQUEST_OPTION,
  ACCEPTED_OPTIONS,
  PENDING_REQUEST_OPTIONS,
  IN_PROGRESS_OPTION,
  PENDING_PAYMENT_OPTION,
  CLOSED_OPTIONS,
  CANCELLED_OPTION,
];

export const getColorOfAppointment = (status) => {
  switch (status) {
    case NEW_REQUEST_VALUE:
      return colorConfig.newRequest;
    case ACCEPTED_VALUE:
      return colorConfig.accepted;
    case PENDING_REQUEST_VALUE:
      return colorConfig.pendingRequest;
    case IN_PROGRESS_VALUE:
      return colorConfig.inProgress;
    case PENDING_PAYMENT_VALUE:
      return colorConfig.pendingPayment;

    default:
      return colorConfig.closed;
  }
};

export const DISABLE_VALUE = 0;
export const ENABLE_VALUE = 1;

export const STATUS_OPTIONS = [
  { value: DISABLE_VALUE, label: formatMessage(globalMessages.disabled) },
  { value: ENABLE_VALUE, label: formatMessage(globalMessages.enabled) },
];

export const INACTIVE_VALUE = 0;
export const ACTIVE_VALUE = 1;

export const PERSON_STATUS_OPTIONS = [
  { value: INACTIVE_VALUE, label: formatMessage(globalMessages.inactive) },
  { value: ACTIVE_VALUE, label: formatMessage(globalMessages.active) },
];
