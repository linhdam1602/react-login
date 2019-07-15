import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Button } from 'antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { FormWrapper, FieldWrapper, LoginWrapper } from './StyledComponents';
import globalMessages from 'containers/App/messages';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import { InputField } from 'components/ReduxForm';

import formValidators from './formValidators';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fields } from './constants';

export function Login({ handleSubmit }) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const onClickSubmit = values => {
    console.log('TCL: Login -> values', values);
  };

  return (
    <LoginWrapper>
      <FormWrapper>
        <FieldWrapper>
          <div>
            <label htmlFor="username"> Username: </label>
          </div>
          <Field
            name={fields.EMAIL}
            component={InputField}
            type="text"
            placeholder={formatMessage(globalMessages.email)}
          />
        </FieldWrapper>
        <FieldWrapper>
          <div>
            <label htmlFor="password"> Password: </label>
          </div>
          <Field
            name={fields.PASSWORD}
            component={InputField}
            type="password"
            placeholder="Password..."
          />
        </FieldWrapper>
        <Button 
          type="primary"
          onClick={handleSubmit(onClickSubmit)}
        > 
          Login 
        </Button>
      </FormWrapper>
    </LoginWrapper>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReduxForm = reduxForm({
  form: 'login',
  validate: formValidators,

  // validate: values => ({ username: 'loi roi' }),
});

export default compose(
  withConnect,
  withReduxForm,
  memo,
)(Login);
