/**
 * Single Image input using in Redux-form
 *
 * value: single image
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';

import noImg from 'assets/images/default-image/no-image.png';
import { colorConfig } from 'config/style';
import globalMessages from 'containers/App/messages';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import ErrorMessages from 'components/FormElements/ErrorMessages';
import Typography from 'components/Typography';

const SingleImageInputField = ({
  name,
  input,
  meta,
  label,
  isRequired,
  infoTooltip,
  maximumSize,
  defaultCover,
  circle, // make preview image `border-radius: 50%`
  ...remainProps
}) => {
  const selectedFile = input.value;

  const { error, touched } = meta;

  const onSelectNewFile = (validFiles) => {
    // maximum size
    const validFile = validFiles.filter((file) => file.size < maximumSize);

    input.onBlur();
    input.onChange(validFile[0]);
  };

  const imagePreview =
    selectedFile.preview || selectedFile.path || selectedFile;

  return (
    <React.Fragment>
      <StyledDropzone
        name={name}
        accept="image/*"
        multiple={false}
        {...remainProps}
        onDrop={onSelectNewFile}
        rejectClassName="reject-style"
        error={touched && error ? 'error' : ''}
      >
        {label && <Typography>{label}</Typography>}

        <CoverImage
          src={imagePreview || defaultCover || noImg}
          circle={circle}
          nodata={!imagePreview ? 'no-data' : ''}
        />
        <DragDropGuide>
          <Icon type="cloud-upload" />
          <b>{formatMessage(globalMessages.dragAndDrop)}</b>
          <span>
            {formatMessage(globalMessages.yourImageHereOr)}{' '}
            <b style={{ textDecoration: 'underline' }}>
              {formatMessage(globalMessages.browse)}
            </b>
          </span>
        </DragDropGuide>
      </StyledDropzone>

      <ErrorMessages error={touched && error} />
    </React.Fragment>
  );
};

SingleImageInputField.propTypes = {
  name: PropTypes.string, // redux-form props for Field
  input: PropTypes.object, // redux-form props for Field
  meta: PropTypes.object, // redux-form props for Field
  // remainProps: remain props will be passed to Input component
  buttonComponent: PropTypes.any,
  label: PropTypes.any,
  infoTooltip: PropTypes.string,
  isRequired: PropTypes.bool,
  maximumSize: PropTypes.number,
  defaultCover: PropTypes.string,
  circle: PropTypes.bool,
};

SingleImageInputField.defaultProps = {
  maximumSize: 5000000, // 5 MB
};

export default SingleImageInputField;

/**
 * Styled components
 */
const StyledDropzone = styled(Dropzone)`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 30px 20px;
  border-radius: 5px;
  border: 1px dashed ${colorConfig.lightGray};

  &.reject-style {
    border-color: ${colorConfig.danger};
    > i {
      color: ${colorConfig.danger} !important;
    }
  }

  ${(props) =>
    props.remove_margin &&
    css`
      height: auto;
      width: auto;
      border: none;
      margin: 0;
    `};

  ${(props) =>
    props.error &&
    css`
      border-color: ${colorConfig.error};
    `};
`;

const CoverImage = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;

  ${(props) =>
    props.circle &&
    css`
      border-radius: 50%;
      width: 130px;
      object-fit: cover;
      height: 130px;
    `};

  ${(props) =>
    props.nodata &&
    css`
      height: 130px;
    `};
`;

export const DragDropGuide = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  text-align: center;
  font-size: 12px;
  color: rgba(33, 33, 33, 0.6);

  .anticon {
    font-size: 20px;
  }

  b {
    font-weight: 600;
    color: #212121;
  }
`;
