/**
 *
 * Authorization
 *
 * Display children if match user role or permission
 *
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUserRole,
  makeSelectUserPermissions,
} from 'containers/App/selectors';

import { isHasOneOfPermissions, isHasAllPermissions } from './withPermissions';

/**
 * Check if user has logged in
 */
const Authorization = ({
  currentUserRole,
  currentUserPermissions,

  notAllowRoles,

  requiredRole,
  requiredOneOfRoles,

  requiredPermission,
  requiredAllPermissions,
  requiredOneOfPermissions,

  children,
}) => {
  // check user role
  if (notAllowRoles && notAllowRoles.includes(currentUserRole)) {
    return '';
  }

  if (requiredRole && requiredRole !== currentUserRole) {
    return '';
  }

  if (requiredOneOfRoles && !requiredOneOfRoles.includes(currentUserRole)) {
    return '';
  }

  // check user permission
  if (
    requiredPermission &&
    !currentUserPermissions.includes(requiredPermission)
  ) {
    return '';
  }

  if (
    requiredAllPermissions &&
    !isHasAllPermissions(requiredAllPermissions, currentUserPermissions)
  ) {
    return '';
  }

  if (
    requiredOneOfPermissions &&
    !isHasOneOfPermissions(requiredOneOfPermissions, currentUserPermissions)
  ) {
    return '';
  }

  return children;
};

Authorization.propTypes = {
  children: PropTypes.any,
  currentUserRole: PropTypes.string,

  notAllowRoles: PropTypes.array,

  requiredRole: PropTypes.string,
  requiredOneOfRoles: PropTypes.array,

  requiredPermission: PropTypes.string,
  requiredAllPermissions: PropTypes.array,
  requiredOneOfPermissions: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  currentUserRole: makeSelectUserRole(),
  currentUserPermissions: makeSelectUserPermissions(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Authorization);
