import {
  EuiPageBody,
  EuiPageContent,
  EuiPage,
  EuiPageSideBar,
  EuiFlexGroup,
  EuiIcon,
  EuiListGroupItem,
  EuiListGroup,
  EuiButtonIcon,
} from '@elastic/eui';
import React, { useState } from 'react';
import SideMenu from './common/side-menu';
import '@elastic/eui/dist/eui_theme_light.css';
import Header from './common/header';

export default function IndexPage(props: any) {
  console.log(props);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appMenu = [
    {
      icon: 'canvasApp',
      title: 'Thương hiệu',
      children: [{ title: 'Danh sách' }],
    },
  ];
  const sideNavItems = appMenu.map((item, index) => (
    <EuiButtonIcon key={index} iconType={item.icon} size="m" iconSize="l" />
  ));

  return (
    <EuiFlexGroup
      className="app-container"
      gutterSize="none"
      direction="column"
      style={{ height: '100%', overflow: 'hidden' }}
    >
      <Header />
      <SideMenu
        menuList={appMenu}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <EuiPage
        style={{
          marginTop: 49,
          padding: 0,
          height: '100%',
        }}
      >
        <EuiPageSideBar
          className="main-side-bar"
          style={{ minWidth: 60, backgroundColor: 'white' }}
          onMouseOver={() => setIsMenuOpen(true)}
          sticky
        >
          <EuiListGroup bordered={false}>{sideNavItems}</EuiListGroup>
        </EuiPageSideBar>
        <EuiPageBody>{props.children}</EuiPageBody>
      </EuiPage>
    </EuiFlexGroup>
  );
}
