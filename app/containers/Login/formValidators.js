import { isValidEmail } from 'utils/common/validators';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

import { fields } from './constants';
const { EMAIL, PASSWORD } = fields;

const formValidators = values => {
  const errors = {};

  if (!values[EMAIL]) {
    errors[EMAIL] = formatMessage(globalMessages.emailCannotBeEmpty);
  }

  if (values[EMAIL] && !isValidEmail(values[EMAIL])) {
    errors[EMAIL] = formatMessage(globalMessages.invalidEmail);
  }

  if (values[PASSWORD]) {
    errors[PASSWORD] = formatMessage(globalMessages.passwordAtLeast6Character);
  }

  return errors;
};

export default formValidators;
