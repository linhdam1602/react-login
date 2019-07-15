import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon } from 'antd';

import Label from 'components/FormElements/Label';
import ErrorMessages from 'components/FormElements/ErrorMessages';
import FormGroup from 'components/FormElements/FormGroup';
import Button from 'components/Button';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

const CustomUpload = ({
  label,
  error,
  isRequired,
  infoTooltip,
  renderButton,
  ...rest
}) => (
  <FormGroup>
    <Label label={label} isRequired={isRequired} infoTooltip={infoTooltip} />
    <Upload {...rest}>
      {renderButton ? (
        <renderButton />
      ) : (
        <Button outline>
          <Icon type="upload" /> {formatMessage(globalMessages.upload)}
        </Button>
      )}
    </Upload>
    <ErrorMessages error={error} />
  </FormGroup>
);

CustomUpload.propTypes = {
  label: PropTypes.any,
  error: PropTypes.any,
  infoTooltip: PropTypes.string,
  isRequired: PropTypes.bool,
  renderButton: PropTypes.any,
};

export default CustomUpload;
