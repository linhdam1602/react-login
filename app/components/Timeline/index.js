/**
 *
 * Timeline component
 * @prop {array} data
 * [
 *    {
 *      left: component
 *      anchor: component
 *      right: component
 *    }
 * ]
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import {
  Wrapper,
  ItemContainer,
  LeftContainer,
  AnchorContainer,
  RightContainer,
  VerticalLine,
  DefaultAnchor,
} from './StyledComponents';

const isShowVerticalLine = (numberItem, currentIndex) => {
  if (currentIndex + 1 === numberItem) return false;

  return true;
};

const Timeline = ({ data = [], line, ...rest }) => (
  <Wrapper {...rest}>
    {data.map((item, index) => (
      <ItemContainer key={uuid()}>
        <LeftContainer>{item.left}</LeftContainer>

        <AnchorContainer>
          {item.anchor || <DefaultAnchor />}
          {isShowVerticalLine(data.length, index) && (line || <VerticalLine />)}
        </AnchorContainer>

        <RightContainer>{item.right}</RightContainer>
      </ItemContainer>
    ))}
  </Wrapper>
);

Timeline.propTypes = {
  data: PropTypes.array,
  line: PropTypes.any,
};

export default Timeline;
