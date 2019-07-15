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
import { colorConfig } from 'config/style';
import globalMessages from 'containers/App/messages';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import ErrorMessages from 'components/FormElements/ErrorMessages';
import Button from 'components/Button';
import Label from 'components/FormElements/Label';
import FileThumbnail from 'components/Thumbnail/File';

const UploadField = ({
  name,
  input,
  meta,
  label,
  isRequired,
  infoTooltip,
  maximumSize,
  limit,
  onRemoveFile,
  ...remainProps
}) => {
  const { error, touched } = meta;
  let selectedFiles = input.value || [];

  const onSelectNewFiles = (validFiles) => {
    // maximum file size
    const validFileSize = validFiles.filter((file) => file.size < maximumSize);

    // limit file
    let currentFileLength = selectedFiles.length;
    const validFile = validFileSize.filter(() => {
      currentFileLength += 1;
      return currentFileLength <= limit;
    });

    input.onBlur();
    input.onChange(
      limit === 1 ? [validFileSize[0]] : selectedFiles.concat(validFile),
    );
  };

  const onClickDeleteFile = (file) => {
    selectedFiles = selectedFiles.filter((selectedFile) =>
      file.id ? selectedFile.id !== file.id : selectedFile !== file,
    );

    if (onRemoveFile) {
      onRemoveFile(file);
    }

    input.onChange(selectedFiles);
  };

  return (
    <Wrapper>
      <Label label={label} isRequired={isRequired} infoTooltip={infoTooltip} />
      <StyledDropzone
        name={name}
        accept="image/*"
        multiple={limit !== 1}
        {...remainProps}
        onDrop={onSelectNewFiles}
        error={touched && error ? 'error' : ''}
      >
        <Button outline>
          <Icon type="upload" />{' '}
          {limit === 1 && selectedFiles.length === 1
            ? formatMessage(globalMessages.reUpload)
            : formatMessage(globalMessages.upload)}
        </Button>
      </StyledDropzone>

      <ErrorMessages error={touched && error} />

      {selectedFiles.map((file) => (
        <FileThumbnail
          key={file.id || file.preview || file.path}
          fileName={file.name}
          fileExtension={file.extension}
          fileSize={file.size}
          onClickRemoveIcon={() => onClickDeleteFile(file)}
        />
      ))}
    </Wrapper>
  );
};

UploadField.propTypes = {
  name: PropTypes.string, // redux-form props for Field
  input: PropTypes.object, // redux-form props for Field
  meta: PropTypes.object, // redux-form props for Field
  // remainProps: remain props will be passed to Input component
  buttonComponent: PropTypes.any,
  label: PropTypes.any,
  infoTooltip: PropTypes.string,
  isRequired: PropTypes.bool,
  maximumSize: PropTypes.number,
  limit: PropTypes.number,
  onRemoveFile: PropTypes.func,
};

UploadField.defaultProps = {
  maximumSize: 10000000, // 10 MB
  limit: 10,
};

export default UploadField;

/**
 * Styled components
 */

const Wrapper = styled.div`
  margin-bottom: 20px;
  display: relative;
  width: 100%;
`;

const StyledDropzone = styled(Dropzone)`
  width: fit-content;

  ${(props) =>
    props.error &&
    css`
      border-color: ${colorConfig.error};
    `};
`;
