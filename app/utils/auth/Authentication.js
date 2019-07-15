/**
 *
 * RequireAuthentication
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import queryString from 'query-string';

import {
  makeSelectAccessToken,
  makeSelectLocation,
} from 'containers/App/selectors';
import { routes, publicPaths, cannotViewIfLoggedInPaths } from 'config/routes';
import { isMatchRoute } from 'utils/common';

/**
 * Check if user has logged in
 */
const Authentication = ({ token, children, location }) => {
  const loggedIn = checkLoggedIn(token);

  // if logged in and go to `/login` => redirect to `/`
  if (loggedIn && isCannotViewIfLoggedInPaths(location.pathname)) {
    return <Redirect to="/" />;
  }

  // if not logged in and in public routes  => don't render protected routes
  if (
    (!loggedIn && isPublicPath(location.pathname)) ||
    [routes.resetPassword, routes.logout, routes.faqs].includes(
      location.pathname,
    )
  ) {
    return null;
  }

  // if not logged in and in protected routes  => redirect to `/login`
  if (!loggedIn) {
    return (
      <Redirect
        to={routes.login.concat(
          '?',
          queryString.stringify({
            path: location.pathname !== routes.logout ? location.pathname : '/',
          }),
        )}
      />
    );
  }

  return children;
};

Authentication.propTypes = {
  children: PropTypes.any,
  token: PropTypes.string,
  location: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectAccessToken(),
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Authentication);

//----------------------------------------------------------------------

const checkMatchPathInRoutes = (configRoutes, currentPath) => {
  let isMatch = false;
  configRoutes.forEach((path) => {
    if (isMatchRoute(path, currentPath)) {
      isMatch = true;
    }
  });

  return isMatch;
};
// check if current route is public route
const isPublicPath = (currentPath) =>
  checkMatchPathInRoutes(publicPaths, currentPath);

// check if current route is public route
const isCannotViewIfLoggedInPaths = (currentPath) =>
  checkMatchPathInRoutes(cannotViewIfLoggedInPaths, currentPath);

// check if JWT is valid
function checkLoggedIn(token) {
  if (typeof token === 'string' && token.length > 0) {
    return true;
  }
  return false;
}
