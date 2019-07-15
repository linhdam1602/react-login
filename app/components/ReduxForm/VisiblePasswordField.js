import React, { useState } from 'react';
import { Field } from 'redux-form';
import uuid from 'uuid';
import { Icon } from 'antd';
import styled from 'styled-components';

import InputField from './InputField';

export const ErrorContainer = styled.div`
  padding: 12px;
  padding-top: 0;
  background-color: white;
  background: rgba(233, 233, 233, 0.3);

  :first-of-type {
    padding-top: 12px;
    margin-top: 12px;
  }
`;

export function VisiblePasswordField(props) {
  const [showPassword, setViewPassword] = useState(false);

  const renderPasswordRequirement = (error) =>
    error.length > 0 && (
      <ErrorContainer key={uuid()}>
        <Icon type="minus-circle" />
        &nbsp;
        {error}
      </ErrorContainer>
    );

  return (
    <Field
      component={InputField}
      isRequired
      type={showPassword ? undefined : 'password'}
      suffix={
        <Icon
          type={`eye${showPassword ? '' : '-invisible'}`}
          onClick={() => setViewPassword(!showPassword)}
        />
      }
      renderError={renderPasswordRequirement}
      {...props}
    />
  );
}

export default VisiblePasswordField;
