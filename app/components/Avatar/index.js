/**
 *
 * Avatar component
 *
 * @prop {string} avatarUrl: URL to avatar image
 * @prop {string} fullName: full name of displayed tooltip
 * @prop {string} size: one of [small, normal, medium, large]
 * @prop {object} style: custom style
 * @prop {bool} showPopup: custom style
 * @prop {string} fullName: custom style
 *
 * @prop {string} subIcon:  subIcon component
 * @prop {string} subIconClassName: css class of sub icon (view `assets/less/icon.less` to see which included fonts )
 * @prop {string} subIconStyle:  style of `subIconClassName`
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Popover } from 'antd';

import noAvatar from './no-avatar.png';

class Avatar extends React.PureComponent {
  RenderWithoutPopup = () => {
    const {
      size,
      subIconClassName,
      subIconStyle,
      style,
      subIcon,
      avatarUrl,
    } = this.props;
    const sizeConfig = getSize(size);

    return (
      <Container style={style} {...this.props}>
        <AvatarImg
          src={avatarUrl || noAvatar}
          height={sizeConfig.avatarSize}
          width={sizeConfig.avatarSize}
        />
        {subIconClassName && (
          <SubIcon
            className={subIconClassName}
            size={sizeConfig.subIconSize}
            position={sizeConfig.subIconPosition}
            style={subIconStyle}
          />
        )}

        {subIcon}
      </Container>
    );
  };

  RenderWithPopup = () => (
    <Popover
      arrowPointAtCenter
      placement="bottom"
      content={this.props.fullName}
      trigger="hover"
      {...this.props}
    >
      {this.RenderWithoutPopup()}
    </Popover>
  );

  render() {
    const { showPopup, fullName } = this.props;

    return showPopup && fullName
      ? this.RenderWithPopup()
      : this.RenderWithoutPopup();
  }
}

Avatar.propTypes = {
  size: PropTypes.string,
  avatarUrl: PropTypes.string,
  fullName: PropTypes.string,
  subIconClassName: PropTypes.string,
  subIconStyle: PropTypes.string,
  style: PropTypes.object,
  showPopup: PropTypes.bool,
  subIcon: PropTypes.any,
};

Avatar.defaultProps = {
  size: 'normal',
  showPopup: true,
};

export default Avatar;

function getSize(size) {
  switch (size) {
    case 'x-small':
      return { avatarSize: '30px', subIconSize: '0px', subIconPosition: {} };
    case 'small':
      return { avatarSize: '40px', subIconSize: '0px', subIconPosition: {} };
    case 'normal':
      return { avatarSize: '60px', subIconSize: '0px', subIconPosition: {} };
    case 'medium':
      return {
        avatarSize: '95px',
        subIconSize: '48px',
        subIconPosition: {
          left: '58px',
          top: '58px',
        },
      };
    case 'large':
      return {
        avatarSize: '130px',
        subIconSize: '48px',
        subIconPosition: {
          left: '87px',
          top: '87px',
        },
      };
    default:
      return {
        avatarSize: size,
        subIconSize: '0px',
        subIconPosition: {},
      };
  }
}

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  border-radius: 50%;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

const SubIcon = styled.i`
  position: absolute;
  left: ${(props) => props.position.left};
  top: ${(props) => props.position.top};
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;
  z-index: 2;
  text-align: center;
  font-size: 25px;
  padding-top: 12px;
`;
