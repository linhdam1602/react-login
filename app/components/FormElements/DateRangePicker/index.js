import React from 'react';
import PropTypes from 'prop-types';

import Label from 'components/FormElements/Label';
import ErrorMessages from 'components/FormElements/ErrorMessages';
import FormGroup from 'components/FormElements/FormGroup';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

import { CustomDateRangePicker, PrefixIcon } from './StyledComponents';

const DatePicker = ({
  label,
  error,
  infoTooltip,
  isRequired,
  outlineBottom,
  suffixIcon,
  ...rest
}) => (
  <FormGroup>
    <Label label={label} isRequired={isRequired} infoTooltip={infoTooltip} />

    <PrefixIcon className="zmdi zmdi-calendar-note custom-date-picker-prefix" />

    <CustomDateRangePicker
      outlineBottom={outlineBottom}
      error={error}
      placeholder={[
        formatMessage(globalMessages.from),
        formatMessage(globalMessages.to),
      ]}
      format="D/M/YYYY"
      {...rest}
    />
    <ErrorMessages error={error} />
  </FormGroup>
);

DatePicker.propTypes = {
  label: PropTypes.any,
  isRequired: PropTypes.bool,
  infoTooltip: PropTypes.string,
  format: PropTypes.string,
  outlineBottom: PropTypes.bool,
  suffixIcon: PropTypes.bool,
  error: PropTypes.string,
};

export default DatePicker;
