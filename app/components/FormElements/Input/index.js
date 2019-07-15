/**
 * Input component
 * Using ant design Input component
 * https://ant.design/components/date-picker/
 *
 * @prop {bool} search: show search icon
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

// import Label from 'components/FormElements/Label';
import ErrorMessages from 'components/FormElements/ErrorMessages';
import FormGroup from 'components/FormElements/FormGroup';
// import formatMessage from 'containers/LanguageProvider/formatMessage';
// import globalMessages from 'containers/App/messages';

import StyledInput from './StyledComponents';

const Input = ({
  label,
  error,
  isRequired,
  infoTooltip,
  isDisabled,
  search,
  renderError,
  ...rest
}) => (
  <FormGroup>
    {/* <Label label={label} isRequired={isRequired} infoTooltip={infoTooltip} /> */}
    <StyledInput
      error={!!error}
      type="text"
      disabled={isDisabled}
      // placeholder={formatMessage(globalMessages.typeHere)}
      suffix={search ? <Icon type="search" theme="outlined" /> : undefined}
      {...rest}
    />
    <ErrorMessages error={error} renderError={renderError} />
  </FormGroup>
);

Input.propTypes = {
  label: PropTypes.any,
  error: PropTypes.any,
  infoTooltip: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  search: PropTypes.bool,
  value: PropTypes.any,
  renderError: PropTypes.func,
};

export default Input;
