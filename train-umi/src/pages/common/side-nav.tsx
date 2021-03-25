import { EuiSideNav } from '@elastic/eui';
import React, { useState } from 'react';

export default function SideNav(props: any) {
  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const sideNav = [
    {
      name: 'Kibana',
      id: 0,
    },
  ];

  return (
    <EuiSideNav
      aria-label="Basic example"
      mobileTitle="Navigate within $APP_NAME"
      toggleOpenOnMobile={() => toggleOpenOnMobile()}
      isOpenOnMobile={isSideNavOpenOnMobile}
      style={{ width: 'auto', position: 'fixed' }}
      items={sideNav}
    />
  );
}
