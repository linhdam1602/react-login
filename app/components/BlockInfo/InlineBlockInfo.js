import React from 'react';
import PropTypes from 'prop-types';

import { Row, FieldCol } from 'components/Layout';
import NoDataLabel from 'components/NoData/Label';
import { Label, Desc } from './StyleComponents';

const InlineBlockInfo = ({
  label,
  desc,
  children,
  lg = 12,
  md = 12,
  labelStyle,
  descStyle,
  style,
  truncate,
  ...remainingProps
}) => (
  <Row {...remainingProps} style={{ marginBottom: 10, ...style }}>
    <FieldCol lg={lg} md={md} style={{ fontWeight: 600, ...labelStyle }}>
      <Label truncate={truncate}>{label}</Label>
    </FieldCol>

    <FieldCol lg={24 - lg} md={24 - md} style={{ ...descStyle }}>
      <Desc truncate={truncate}>
        {desc || (!children && <NoDataLabel />)}
        {children}
      </Desc>
    </FieldCol>
  </Row>
);

InlineBlockInfo.propTypes = {
  label: PropTypes.any,
  desc: PropTypes.any,
  lg: PropTypes.number,
  md: PropTypes.number,
  labelStyle: PropTypes.object,
  descStyle: PropTypes.object,
  style: PropTypes.object,
  truncate: PropTypes.bool,
  children: PropTypes.any,
};

export default InlineBlockInfo;
