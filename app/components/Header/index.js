import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu, Breadcumb } from 'antd';

import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  const { Header } = Layout
  return (
    <div>
      <Layout className="layout">
        <Header> 
          <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1" to="/"><FormattedMessage {...messages.home} /></Menu.Item>
          <Menu.Item key="2"><FormattedMessage {...messages.features} /></Menu.Item>
        </Menu>
          {/* <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink> */}
        </Header>
      </Layout>
    </div>
  );
}

export default Header;
