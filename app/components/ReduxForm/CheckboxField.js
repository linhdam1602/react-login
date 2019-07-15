/**
 * Checkbox using in Redux-form
 *
 * value: (boolean)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from 'components/FormElements/Checkbox';

const CheckboxField = ({
  input: { value, ...rest },
  meta: { touched, error },
  ...remainProps
}) => (
  <Checkbox
    {...rest}
    {...remainProps}
    checked={!!value}
    touched={touched}
    error={error}
  />
);

CheckboxField.propTypes = {
  input: PropTypes.object, // redux-form props for Field
  meta: PropTypes.object, // redux-form props for Field
  // remainProps: remain props will be passed to Checkbox component
};

export default CheckboxField;
