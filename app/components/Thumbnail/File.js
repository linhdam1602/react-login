/**
 *
 * File Thumbnail Component
 * @prop {func} onClickRemoveIcon: callback when `x` icon clicked
 * @prop {func} onClickFileThumbnail: callback when click on file icon
 * @prop {string} url:
 * @prop {string} fileName:
 * @prop {string} fileExtension:
 * @prop {string} fileSize:  size of file, must include unit (Kb, Mb,..) only display file size when `big` === true
 * @prop {bool} big: make file thumbnail bigger and display file size, move remove icon to top-left corner of the file icon
 * @prop {bool} clickToDownload: download image when click on thumbnail
 * @prop {component} dropdownMenu: list of MenuItem
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Dropdown, Icon, Menu } from 'antd';

import { colorConfig } from 'config/style';
import getFileIcon from './getFileIcon';

const renderDropdownMenu = (menus) => (
  <Dropdown overlay={<Menu>{menus}</Menu>} trigger={['click']}>
    <PopUpIcon className="fa fa-ellipsis-v" />
  </Dropdown>
);

const FileThumbnail = ({
  fileName,
  fileExtension,
  fileSize, // only display file size when `big` === true
  onClickRemoveIcon,
  onClickFileThumbnail,
  url,
  big,
  dropdownMenu,
  clickToDownload,
  ...rest
}) => {
  const onClick = () => {
    if (onClickFileThumbnail) {
      onClickFileThumbnail();
    }

    if (clickToDownload) {
      const newTab = window.open(url, '_blank');
      newTab.focus();
    }
  };

  const ext =
    (fileName
      .toString()
      .split('.')
      .pop() || '') !== fileExtension && fileExtension !== ''
      ? `.${fileExtension}`
      : '';
  // concat extension to file name if the last .xxx differ from fileExtension
  const nameExt = `${fileName}${ext}`;

  return (
    <Wrapper {...rest} big={big} clickToDownload={clickToDownload}>
      {onClickRemoveIcon && (
        <RemoveIcon onClick={onClickRemoveIcon}>
          <Icon type="delete" />
        </RemoveIcon>
      )}

      {dropdownMenu && renderDropdownMenu(dropdownMenu)}

      <FileIcon src={getFileIcon(nameExt)} alt="" onClick={onClick} />

      <ContentWrapper>
        <Filename onClick={onClick}> {nameExt} </Filename>
        {big && <FileSize>{fileSize}</FileSize>}
      </ContentWrapper>
    </Wrapper>
  );
};

FileThumbnail.propTypes = {
  onClickRemoveIcon: PropTypes.func,
  onClickFileThumbnail: PropTypes.func,
  fileName: PropTypes.string.isRequired,
  fileExtension: PropTypes.string,
  fileSize: PropTypes.any,
  big: PropTypes.bool,
  clickToDownload: PropTypes.bool,
  url: PropTypes.string,
  dropdownMenu: PropTypes.any,
};

FileThumbnail.defaultProps = {
  big: false,
  fileExtension: '',
};

export default FileThumbnail;

/**
 * Styled components
 */

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 40px;
  position: relative;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid ${colorConfig.borderInput};
  padding-top: ${(props) => (props.big ? '4px' : '11px')} !important;

  :hover {
    border: solid 1px #cecece;
    background-color: #f7f7f7;
  }

  ${({ clickToDownload }) =>
    clickToDownload &&
    css`
      cursor: pointer;
      color: ${colorConfig.primary};
    `};
`;

const PopUpIcon = styled.i`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex !important;
  float: right;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${colorConfig.borderInput};
  }
`;

const Filename = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
  font-size: 12px;

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `};
`;

const RemoveIcon = styled.div`
  color: ${colorConfig.cancel};
  position: absolute;
  right: 8px;
  top: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  padding-left: 44px;
`;

const FileSize = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10px;
  color: ${colorConfig.disabledText};
`;

const FileIcon = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  left: 8px;
  top: 8px;

  ${(props) => props.onClick && 'cursor: pointer'};
`;
