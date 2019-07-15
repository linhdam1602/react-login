/* eslint-disable react/prop-types */

/**
 * HOC check required user-role to visit to a route
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserRole } from 'containers/App/selectors';

import routes from 'config/routes';

/**
 * HOC to check if user has ONE OF required roles
 * @param {array} roles: list roles
 */
export const withOneOfRoles = (roles) => withRoleHOC(roles, checkOneOf);

/**
 * HOC to check if user has required role
 * @param {string} role: require role
 */
export const withRole = (role) => withRoleHOC([role], checkOneOf);

export default withRole;

/**
 * HOC to check required role to render component
 * @param {string} role: must be one of role config in `config/userRoles`
 * @param {func} isAuthorized(roles, userRole): function to check roles
 */
const withRoleHOC = (roles, isAuthorized) => (WrappedComponent) => {
  class ValidateRole extends React.Component {
    constructor(props) {
      super(props);
      const { userRole, history } = props;

      if (!isAuthorized(roles, userRole)) {
        history.replace(routes.accessDenied);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = createStructuredSelector({
    userRole: makeSelectUserRole(),
  });

  const withConnect = connect(mapStateToProps);

  return compose(
    withConnect,
    withRouter,
  )(ValidateRole);
};

// check user has ONE OF required roles
function checkOneOf(roles, userRole) {
  let isAuthorized = false;

  roles.forEach((p) => {
    if (userRole.includes(p)) {
      isAuthorized = true;
    }
  });

  return isAuthorized;
}
