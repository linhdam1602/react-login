import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { colorConfig } from 'config/style';

/* eslint-disable indent */
const HR = styled.div`
  border-top: 1px solid ${colorConfig.borderInput};
  height: 1px;

  ${(props) =>
    props.noMargin &&
    css`
      margin: 0 -24px;
    `}
`;

HR.propTypes = {
  noMargin: PropTypes.bool,
  margin: PropTypes.any,
};

export default (props) => <HR {...props} />;
