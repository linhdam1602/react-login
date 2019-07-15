/* eslint-disable react/prop-types */

/**
 * HOC check required permission to visit to a route
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserPermissions } from 'containers/App/selectors';

import routes from 'config/routes';

/**
 * HOC to check if user has ONE OF required permissions
 * @param {array} permissions: list permissions
 */
export const withOneOfPermissions = (permissions) =>
  withPermissionHOC(permissions, isHasOneOfPermissions);

/**
 * HOC to check if user has ALL required permissions
 * @param {array} permissions: list permissions
 */
export const withAllPermissions = (permissions) =>
  withPermissionHOC(permissions, isHasAllPermissions);

/**
 * HOC to check if user has required permission
 * @param {array} permissions: list permissions
 */
export const withPermission = (permission) =>
  withPermissionHOC([permission], isHasOneOfPermissions);

export default withPermission;

/**
 * HOC to check required permission to render component
 * @param {string} permission: must be one of permission config in `config/permissions`
 * @param {func} isAuthorized(permissions, userPermissions): function to check permissions
 */
const withPermissionHOC = (permissions, isAuthorized) => (WrappedComponent) => {
  class ValidatePermission extends React.Component {
    constructor(props) {
      super(props);
      const { userPermissions = [], history } = props;

      if (!isAuthorized(permissions, userPermissions)) {
        history.replace(routes.accessDenied);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = createStructuredSelector({
    userPermissions: makeSelectUserPermissions(),
  });

  const withConnect = connect(mapStateToProps);

  return compose(
    withConnect,
    withRouter,
  )(ValidatePermission);
};

// check user has ONE OF required permissions
export function isHasOneOfPermissions(permissions, userPermissions) {
  let isAuthorized = false;

  permissions.forEach((p) => {
    if (userPermissions.includes(p)) {
      isAuthorized = true;
    }
  });

  return isAuthorized;
}

// check if user has ALL required permissions
export function isHasAllPermissions(permissions, userPermissions) {
  let isAuthorized = true;

  permissions.forEach((p) => {
    if (!userPermissions.includes(p)) {
      isAuthorized = false;
    }
  });

  return isAuthorized;
}
