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
import { Helmet } from '@/.umi/plugin-helmet/exports';
import '@elastic/eui/dist/eui_theme_light.css';
import './index.less';

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
  };

  const themeLinks = () => {
    if (localStorage.getItem('theme') === 'dark') {
      return (
        <link
          charSet="utf-8"
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/@elastic/eui@31.3.0/dist/eui_theme_dark.css"
        />
      );
    } else {
      return (
        <link
          charSet="utf-8"
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/@elastic/eui@31.3.0/dist/eui_theme_light.css"
        />
      );
    }
  };

  useEffect(() => {});

  return (
    <>
      <Helmet>{themeLinks()}</Helmet>
      <EuiFlexGroup
        className="app-container"
        gutterSize="none"
        direction="column"
      >
        <Header selectedTheme={theme} onThemeChange={handleThemeChanged} />
        <SideMenu
          menuList={appMenu}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
        <EuiPage className="app-main">
          <EuiPageSideBar
            className="side-container"
            onMouseOver={() => setIsMenuOpen(true)}
            sticky
          >
            <EuiListGroup>{sideNavItems}</EuiListGroup>
          </EuiPageSideBar>
          <EuiPageBody>{props.children}</EuiPageBody>
        </EuiPage>
      </EuiFlexGroup>
    </>
  );
}
