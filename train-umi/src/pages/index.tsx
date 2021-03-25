import {
  EuiPageBody,
  EuiPageContent,
  EuiPage,
  EuiPageSideBar,
  EuiFlexGroup,
  EuiIcon,
} from '@elastic/eui';
import { useState } from 'react';
import SideMenu from './common/side-menu';
import '@elastic/eui/dist/eui_theme_light.css';
import Header from './common/header';
import Breadcrumb from './common/breadcrumb';

export default function IndexPage(props: any) {
  console.log(props);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [{ icon: 'dashboardApp', title: 'Thương hiệu' }];
  const sideNavItems = menuItems.map((item, index) => (
    <div key={index} className="side-nav-item">
      <EuiIcon type={item.icon} size="l" />
    </div>
  ));

  const appMenu = [
    {
      icon: 'canvasApp',
      title: 'Thương hiệu',
      children: [{ title: 'Danh sách' }],
    },
  ];
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
          style={{ minWidth: 50, backgroundColor: 'white', padding: 16 }}
          onMouseOver={() => setIsMenuOpen(true)}
        >
          {sideNavItems}
        </EuiPageSideBar>
        <EuiPageBody>
          <EuiPageContent>{props.children}</EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </EuiFlexGroup>
  );
}
