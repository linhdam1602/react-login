import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DateRangePicker from 'components/FormElements/DateRangePicker';

const DateRangePickerField = ({
  input,
  meta: { touched, error, ...remainMeta },
  dateFormat = 'D/M/YYYY',
  outlineBottom,
  onChangeDate,
  ...remainProps
}) => {
  const { value, onChange, ...remainInput } = input;

  const momentValues = value && value.map((v) => moment(v, dateFormat));

  const onChangeValue = (datesMoment, datesString) => {
    if (onChangeDate) {
      onChangeDate(datesMoment);
    }

    onChange(datesString[0] && datesString);
  };

  return (
    <DateRangePicker
      {...remainInput}
      {...remainMeta}
      {...remainProps}
      error={(touched && error) || ''}
      onChange={onChangeValue}
      onBlur={(e) => e.preventDefault()}
      format={dateFormat}
      value={momentValues}
      outlineBottom={outlineBottom}
    />
  );
};

DateRangePickerField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  dateFormat: PropTypes.string,
  outlineBottom: PropTypes.bool,
  onChangeDate: PropTypes.func,
};

export default DateRangePickerField;
