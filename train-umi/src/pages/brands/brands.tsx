import { EuiFlexGroup } from '@elastic/eui';
import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import styles from './brands.less';

export default function Brands() {
  const breadcrumbs = [
    {
      text: 'Thương hiệu',
      href: '/brands',
    },
  ];
  return (
    <EuiFlexGroup
      className="guideFullScreenOverlay"
      gutterSize="none"
      direction="column"
    >
      <Breadcrumb breadcrumbs={breadcrumbs} />
    </EuiFlexGroup>
  );
}
