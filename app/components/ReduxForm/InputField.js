/**
 * Text Input using in Redux-form
 *
 * value: (string) for (number) (depend on `type` props)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/FormElements/Input';

const InputField = ({
  input: { onChange, onFocus, onBlur, value, ...rest },
  meta: { touched, error },
  isDisabled,
  ...remainProps
}) => {
  const onBlurInputField = () => {
    const trimmedValue = `${value}`.trim();

    if (trimmedValue.length === 0) {
      onChange('');
      onBlur('');
    } else {
      onBlur(value);
    }
  };

  return (
    <Input
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlurInputField}
      value={value}
      isDisabled={isDisabled}
      {...rest}
      {...remainProps}
      error={(touched && error) || ''}
    />
  );
};

InputField.propTypes = {
  input: PropTypes.object, // redux-form props for Field
  meta: PropTypes.object, // redux-form props for Field
  disabled: PropTypes.bool,
  isDisabled: PropTypes.bool,
  // remainProps: remain props will be passed to Input component
};

export default InputField;
