import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiBadge,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiAvatar,
  EuiSwitch,
} from '@elastic/eui';
import React from 'react';

export default ({ selectedTheme, onThemeChange }: any) => {
  return (
    <EuiHeader
      position="fixed"
      sections={[
        {
          items: [<EuiHeaderLogo>{'Kho hàng'}</EuiHeaderLogo>],
          borders: 'none',
        },
        {
          items: [
            <EuiSwitch
              label=""
              checked={selectedTheme === 'dark' ? true : false}
              onChange={(e) => onThemeChange(e)}
            />,
          ],
          borders: 'none',
        },
      ]}
    />
  );
};
