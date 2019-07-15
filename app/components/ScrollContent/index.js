/**
 *
 * ScrollContent component
 * Render Vertical scroll section
 * @prop {string} height: max height of the scroll (400px, ...)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import { ScrollArea } from './StyledComponents';

const ScrollContent = ({
  height,
  maxHeight,
  paddingRight,
  children,
  style,
  ...rest
}) => {
  const isWindowsOS = navigator.appVersion.indexOf('Win') !== -1;

  if (!isWindowsOS) {
    return (
      <ScrollArea style={{ ...style, height, paddingRight }}>
        {children}
      </ScrollArea>
    );
  }

  return (
    <Scrollbars
      autoHideTimeout={1000}
      autoHideDuration={200}
      autoHeight
      autoHeightMin={height}
      autoHeightMax={height || maxHeight}
      style={{ height, position: 'relative', overflowX: 'hidden' }}
      {...rest}
    >
      <div style={{ paddingRight, ...style }} className="scroll-bars-content">
        {children}
      </div>
    </Scrollbars>
  );
};

ScrollContent.propTypes = {
  maxHeight: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  paddingRight: PropTypes.string,
};

ScrollContent.defaultProps = {
  maxHeight: '300px',
};

export default ScrollContent;
