import React from 'react';
import styled from 'styled-components';

import { colorConfig } from 'config/style';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

export const NoInfo = styled.span`
  color: ${colorConfig.disabled};
`;

// eslint-disable-next-line
const NoDataLabel = ({ children, ...rest }) => (
  <NoInfo {...rest}>{children || formatMessage(globalMessages.noInfo)}</NoInfo>
);

export default NoDataLabel;
