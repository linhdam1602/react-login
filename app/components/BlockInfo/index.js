/**
 * FlexContainer, BlockInfo, LineBreak component
 * View docs below
 */

/**
 * Block Info - display data with a label
 * @prop {string} label: label of BlockInfo
 * @prop {any} desc: content of BlockInfo
 * @prop {bool} fullWidth: make BlockInfo take full with of its FlexContainer
 * @prop {bool} inline: display data in 1 line
 * @prop {bool} center: display label and desc center horizontally
 * @prop {bool} noMargin: set margin to 0
 * @prop {bool} autoWidth:
 *  = true (default): make all BlockInfo width equally in FlexContainer
 *  = false: make BlockInfo width equal with of the content
 * @prop {string} fixLabel: make label width fix (100px, ...)
 * @prop {bool} truncate: truncate text when it's long over container width
 */

import React from 'react';
import PropTypes from 'prop-types';

import NoDataLabel from 'components/NoData/Label';

import {
  Label,
  Desc,
  FlexWrapper,
  InfoWrapper,
  LineBreaker,
} from './StyleComponents';

/**
 * Info container
 */
export const FlexContainer = FlexWrapper;

/**
 * Break into new line
 */
export const LineBreak = () => <LineBreaker />;

export const BlockInfo = ({
  label,
  desc,
  children,
  fullWidth,
  inline,
  center,
  noMargin,
  autoWidth,
  labelStyle,
  truncate,
  ...rest
}) => (
  <InfoWrapper
    fullWidth={fullWidth}
    inline={inline}
    center={center}
    noMargin={noMargin}
    autoWidth={autoWidth}
    {...rest}
    className="block-info-wrapper"
  >
    <Label
      truncate={truncate}
      style={{
        marginRight: inline ? '10px' : '0',
        ...labelStyle,
      }}
    >
      {label}
      {inline && ': '}
    </Label>

    {children || <Desc truncate={truncate}>{desc || <NoDataLabel />}</Desc>}
  </InfoWrapper>
);

BlockInfo.propTypes = {
  fullWidth: PropTypes.bool,
  autoWidth: PropTypes.bool,
  inline: PropTypes.bool,
  noMargin: PropTypes.bool,
  center: PropTypes.bool,
  truncate: PropTypes.bool,
  label: PropTypes.any,
  desc: PropTypes.any,
  children: PropTypes.any,
  labelStyle: PropTypes.object,
};

BlockInfo.defaultProps = {
  autoWidth: true, // default
};

export default BlockInfo;
