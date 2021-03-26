import {
  EuiCode,
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';
import { EuiFlexGroup } from '@elastic/eui/src/components/flex/flex_group';
import React, { useEffect, useState } from 'react';
import SideMenuItem from './side-menu-item';

export default ({ menuList, isOpen, onClose }: any) => {
  const [navIsOpen, setNavIsOpen] = useState(isOpen);

  useEffect(() => {
    setNavIsOpen(isOpen);
  });

  const navItems = () => {
    if (!menuList || menuList.length === 0) {
      return null;
    }
    return menuList.map((menuItem: any, index: number) => {
      return <SideMenuItem key={index} menu={menuItem} />;
    });
  };

  return (
    <EuiCollapsibleNav
      isOpen={navIsOpen}
      isDocked={false}
      onClose={onClose}
      showCloseButton={false}
      style={{ top: 49 }}
    >
      {navItems()}
    </EuiCollapsibleNav>
  );
};
