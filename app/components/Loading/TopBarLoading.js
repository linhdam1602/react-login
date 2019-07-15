/* eslint-disable react/prop-types */

import styled from 'styled-components';
import React from 'react';
import colorConfig from 'config/style';

export const TopBarLoading = styled.div`
  height: 3px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  overflow: hidden;
  background-color: transparent;

  :before {
    display: block;
    position: absolute;
    content: '';
    left: -200px;
    width: 200px;
    height: 3px;
    background-color: ${colorConfig.primary};
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    from {
      left: -200px;
      width: 30%;
    }
    50% {
      width: 30%;
    }
    70% {
      width: 70%;
    }
    80% {
      left: 50%;
    }
    95% {
      left: 120%;
    }
    to {
      left: 100%;
    }
  }
`;

export const BarLoading = ({ error, ...rest }) => {
  if (error) {
    window.location.reload();
  }

  return <TopBarLoading {...rest} />;
};

export default BarLoading;
