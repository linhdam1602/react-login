/**
 * Render Avatar with full name in a card
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card } from 'antd';
import Avatar from 'components/Avatar';

const AvatarCard = ({ size, fullName, noBorder, ...rest }) => {
  const AvatarCardNoBorder = (
    <React.Fragment>
      <Avatar {...rest} size={size} showPopup={false} />
      <FullName>{fullName}</FullName>
    </React.Fragment>
  );

  if (noBorder) return <NoBorderWrapper>{AvatarCardNoBorder}</NoBorderWrapper>;

  return (
    <Card>
      <BorderWrapper>{AvatarCardNoBorder} </BorderWrapper>
    </Card>
  );
};

AvatarCard.propTypes = {
  fullName: PropTypes.any,
  size: PropTypes.string,
  noBorder: PropTypes.bool,
};

AvatarCard.defaultProps = {
  noBorder: false,
  size: 'small',
};

export default AvatarCard;

/**
 * Styled components
 */
const NoBorderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const BorderWrapper = NoBorderWrapper.extend`
  margin: -15px;
  position: relative;
`;

const FullName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-overflow: hidden;
  height: 40px;
  margin-left: 10px;
  overflow: hidden;
  font-weight: 500;
  width: 100%;
`;
