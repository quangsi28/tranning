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
import React, { useEffect, useState } from 'react';
import SideMenu from './common/side-menu';
import Header from './common/header';

export default function IndexPage(props: any) {
  const defaultTheme = localStorage.getItem('theme') || 'light';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(defaultTheme);

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

  const handleThemeChanged = (event: any) => {
    if (event.target.checked) {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
    if (localStorage.getItem('theme') === 'dark') {
      require('@elastic/eui/dist/eui_theme_dark.css');
    } else {
      require('@elastic/eui/dist/eui_theme_light.css');
    }
  };

  useEffect(() => {});

  return (
    <EuiFlexGroup
      className="app-container"
      gutterSize="none"
      direction="column"
      style={{ height: '100%', overflow: 'hidden' }}
    >
      <Header selectedTheme={theme} onThemeChange={handleThemeChanged} />
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
          style={{ minWidth: 60 }}
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
