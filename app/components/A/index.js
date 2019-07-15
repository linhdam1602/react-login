/**
 *
 * A component
 * render <a></a> tag
 *
 * @prop {string} fontSize: 20px, 1.5rem, ...
 */

import styled, { css } from 'styled-components';
import colorConfig from 'config/style';

export default styled.a`
  color: ${colorConfig.linkColor} !important;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  :hover {
    color: ${colorConfig.linkColor} !important;
  }

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `};
`;
