import {
  EuiCode,
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';
import React, { useEffect, useState } from 'react';
import SideMenuItem from './side-menu-item';

export default (props: any) => {
  const [navIsOpen, setNavIsOpen] = useState(props.isOpen);
  const [navIsDocked, setNavIsDocked] = useState(false);

  useEffect(() => {
    setNavIsOpen(props.isOpen);
  });

  const navItems = () => {
    if (!props.menuList || props.menuList.length === 0) {
      return null;
    }
    return props.menuList.map((menuItem: any, index: number) => {
      return <SideMenuItem key={index} theme={props.theme} menu={menuItem} />;
    });
  };

  return (
    <EuiCollapsibleNav
      isOpen={navIsOpen}
      isDocked={false}
      onClose={props.onClose}
      showCloseButton={false}
      style={{ top: 49 }}
    >
      {navItems()}
    </EuiCollapsibleNav>
  );
};
