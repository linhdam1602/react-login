/**
 * TextArea Input using in Redux-form
 *
 * value: (string)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextArea from 'components/FormElements/Input/TextArea';

const InputField = ({
  input: { onChange, onFocus, onBlur, value },
  meta: { touched, error },
  ...remainProps
}) => {
  const onBlurInputField = () => {
    const trimmedValue = (value || '').trim();

    if (trimmedValue.length === 0) {
      onChange('');
      onBlur('');
    } else {
      onBlur(value);
    }
  };

  return (
    <TextArea
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlurInputField}
      value={value}
      {...remainProps}
      error={(touched && error) || ''}
    />
  );
};

InputField.propTypes = {
  input: PropTypes.object, // redux-form props for Field
  meta: PropTypes.object, // redux-form props for Field
  // remainProps: remain props will be passed to Input component
};

export default InputField;
