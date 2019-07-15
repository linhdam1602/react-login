/* eslint-disable react/prop-types */
/**
 * Radio component
 *
 *
 * @prop {func} onChange
 * @prop {any} value
 * @prop {array} options
 * [
 *    {
 *      value,
 *      label,
 *      ...
 *    }
 * ]
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Radio as AntRadio } from 'antd';
import styled from 'styled-components';
import uuid from 'uuid';

import ErrorMessages from 'components/FormElements/ErrorMessages';
import Label from 'components/FormElements/Label';
import { RadioGroupContainer } from './StyledComponents';

const RadioGroup = styled(AntRadio.Group)`
  width: 100%;
`;

const DefaultWrapper = ({ children }) => (
  <div className="radio-group-default-wrapper">{children}</div>
);

const DefaultOptionWrapper = ({ children }) => (
  <div className="radio-group-default-option-wrapper">{children}</div>
);

const Radio = ({
  onChange,
  value,
  options = [],
  label,
  error,
  Wrapper = DefaultWrapper,
  OptionWrapper = DefaultOptionWrapper,
  isRequired,
  infoTooltip,
  ...radioGroupProps
}) => (
  <RadioGroupContainer>
    <Label
      label={label}
      isRequired={isRequired}
      infoTooltip={infoTooltip}
      style={{ marginBottom: 10 }}
    />
    <RadioGroup onChange={onChange} value={value} {...radioGroupProps}>
      <Wrapper>
        {options.map((radio) => (
          <OptionWrapper key={uuid()}>
            <AntRadio value={radio.value} {...radio}>
              {radio.label}
            </AntRadio>
          </OptionWrapper>
        ))}
      </Wrapper>
    </RadioGroup>

    <ErrorMessages error={error} />
  </RadioGroupContainer>
);

Radio.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  options: PropTypes.array,
  Wrapper: PropTypes.any, // react component
  OptionWrapper: PropTypes.any, // react component
  // props for Label
  label: PropTypes.any,
  isRequired: PropTypes.bool,
  infoTooltip: PropTypes.array,
  error: PropTypes.string,
};

export default Radio;
