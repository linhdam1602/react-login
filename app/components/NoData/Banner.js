/**
 *
 * NoData
 * @prop {string} label: no data message
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

export const NoDataWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoDataBanner = ({ style, label, children }) => (
  <NoDataWrapper style={style}>
    <span>{children || label}</span>
  </NoDataWrapper>
);

NoDataBanner.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

NoDataBanner.defaultProps = {
  label: formatMessage(globalMessages.noData),
};

export default NoDataBanner;
