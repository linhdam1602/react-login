/**
 * Text Input using in Redux-form
 *
 * value: (string) for (number) (depend on `type` props)
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import InputNumber from 'components/FormElements/Input/InputNumber';

const InputNumberField = ({
  input: { onChange, onFocus, onBlur, value, ...rest },
  meta: { touched, error },
  isDisabled,
  ...remainProps
}) => {
  const onInputBlur = (e) => {
    onBlur(e);

    if (remainProps.onBlur) {
      remainProps.onBlur(e);
    }
  };

  return (
    <InputNumber
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onInputBlur}
      value={value}
      isDisabled={isDisabled}
      {...rest}
      {...remainProps}
      error={(touched && error) || ''}
    />
  );
};

InputNumberField.propTypes = {
  input: PropTypes.object, // redux-form props for Field
  meta: PropTypes.object, // redux-form props for Field
  disabled: PropTypes.bool,
  isDisabled: PropTypes.bool,
  // remainProps: remain props will be passed to Input component
};

export default memo(InputNumberField);
