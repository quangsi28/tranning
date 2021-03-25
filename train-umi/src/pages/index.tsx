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
import Breadcrumb from './common/breadcrumb';

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
      className="guideFullScreenOverlay"
      gutterSize="none"
      direction="column"
    >
      <Header />
      <SideMenu
        menuList={appMenu}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <EuiPage style={{ marginTop: 49, padding: 0 }}>
        <EuiPageSideBar
          style={{ minWidth: 60, backgroundColor: 'white' }}
          onMouseOver={() => setIsMenuOpen(true)}
        >
          <EuiListGroup bordered={false}>{sideNavItems}</EuiListGroup>
        </EuiPageSideBar>
        <EuiPageBody>{props.children}</EuiPageBody>
      </EuiPage>
    </EuiFlexGroup>
  );
}
