/**
 * Radio Field using in Redux-form
 *
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Radio from 'components/FormElements/Radio';

const RadioField = ({
  input: { onChange, value },
  meta: { touched, error },
  ...remainProps
}) => (
  <Radio
    onChange={(e) => onChange(e.target.value)}
    value={value}
    error={(touched && error) || ''}
    {...remainProps}
  />
);

RadioField.propTypes = {
  input: PropTypes.object, // redux-form props for Field
  meta: PropTypes.object, // redux-form props for Field
  // remainProps: remain props will be passed to Checkbox component
};

export default RadioField;
