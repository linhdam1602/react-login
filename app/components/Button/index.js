/**
 * Button Component
 *
 * @prop {string} theme: theme of button (info, secondary, warning, danger, cancel, pink and default (no specify `theme` props))
 * @prop {bool} outline: No background color
 * @prop {bool} small: make button smaller
 * @prop {bool} disabled: make button disabled
 * @prop {bool} circle: make circle button
 * @prop {bool} capitalize: capitalize first letter of each word in label
 * @prop {bool} uppercase: capitalize all letter in label
 *
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { colorConfig } from 'config/style';

function getColor(props) {
  const { theme, outline } = props;
  let background;
  let text;
  let border;

  switch (theme) {
    case 'primary':
      background = colorConfig.primary;
      border = colorConfig.primary;
      text = colorConfig.whiteText;
      break;

    default:
      background = colorConfig.darkPrimary;
      border = colorConfig.darkPrimary;
      text = colorConfig.whiteText;
      break;
  }

  if (outline) {
    text = colorConfig.darkPrimary;
    background = colorConfig.whiteText;
  }

  return { background, text, border };
}

/* eslint-disable indent */
const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  touch-action: manipulation;
  font-size: 14px;
  line-height: 21px;
  min-height: 40px;
  letter-spacing: 0.3px;
  text-transform: capitalize;
  padding: 6px 25px;
  border-radius: 5px;
  border: 1px ${colorConfig.borderInput} solid;
  min-width: 120px;

  :hover {
    transition: all 0.3s ease-in-out;
  }

  :focus,
  :active {
    outline: none !important;
    box-shadow: none;
  }

  ${(props) => {
    const { background, text, border } = getColor(props);
    return css`
      background-color: ${background};
      color: ${text};
      border-color: ${border};
    `;
  }};

  ${(props) => props.uppercase && 'text-transform: uppercase'};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.65;
      cursor: not-allowed;
      :hover {
        filter: brightness(100%);
      }
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
      min-width: ${props.width};
    `};

  ${(props) =>
    props.maxWidth &&
    css`
      width: 100%;
    `};
`;

export default (props) => <Button type="button" {...props} />;
