/**
 * Navigation user to first route that they authorized to access
 *
 * @param {array} routes
 * [
 *  {path, requirePermission,...},
 *  ...
 * ]
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUserPermissions,
  makeSelectLocation,
} from 'containers/App/selectors';

const DefaultNavigation = ({
  indexRoute,
  routes,
  userPermissions,
  location,
}) => {
  const firstAuthorizedRoute = routes
    .filter(
      (route) =>
        !route.requirePermission ||
        userPermissions.includes(route.requirePermission),
    )
    .shift();

  if (location.pathname === indexRoute) {
    return <Redirect to={firstAuthorizedRoute.path || firstAuthorizedRoute} />;
  }

  return null;
};

DefaultNavigation.propTypes = {
  indexRoute: PropTypes.string.isRequired,
  routes: PropTypes.array.isRequired,
  userPermissions: PropTypes.array,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userPermissions: makeSelectUserPermissions(),
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(DefaultNavigation);
