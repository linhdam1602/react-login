/* eslint-disable react/no-array-index-key */
/**
 *
 * TabNavigation
 *
 * @prop {array of object} links: list of links to navigate,
 *       [
 *          {
 *            label: string
 *            path: string
 *            requirePermission: string
 *          }
 *       ]
 * @prop {bool} type: `tab` (default), `topMenu` and `smallTab`
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';

import formatMessage from 'containers/LanguageProvider/formatMessage';
import {
  makeSelectUserPermissions,
  makeSelectLocation,
} from 'containers/App/selectors';
import { capitalizeFirstLetter } from 'utils/common';

import { TabNavigationContainer } from './StyleComponents';

const TopMenuNavigation = ({
  userPermissions,
  location,
  links,
  type = 'tab',
}) => {
  let activeTabIndex = 0;
  const tabs = links
    .filter((item) => {
      if (!item.requirePermission) return true;
      return userPermissions.includes(item.requirePermission);
    })
    .map((item, index) => {
      if (location.pathname.includes(item.path)) {
        activeTabIndex = index;
      }

      return {
        title: (
          <Link to={item.path}>
            {capitalizeFirstLetter(formatMessage(item.label))}
          </Link>
        ),
        getContent: () => '',
      };
    });

  return (
    <TabNavigationContainer type={type}>
      <Tabs
        items={tabs}
        transformWidth={1}
        activeTabIndex
        selectedTabKey={activeTabIndex}
        showMoreLabel={<i className="zmdi zmdi-more" />}
      />
    </TabNavigationContainer>
  );
};

TopMenuNavigation.propTypes = {
  links: PropTypes.array,
  userPermissions: PropTypes.array,
  location: PropTypes.object,
  type: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  userPermissions: makeSelectUserPermissions(),
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(TopMenuNavigation);
