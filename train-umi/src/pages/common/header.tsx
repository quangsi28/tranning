import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiBadge,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiAvatar,
} from '@elastic/eui';
import React from 'react';

export default (props: any) => {
  return (
    <EuiHeader
      position="fixed"
      sections={[
        {
          items: [<EuiHeaderLogo>{'Kho hàng'}</EuiHeaderLogo>],
          borders: 'none',
        },
      ]}
    />
  );
};
