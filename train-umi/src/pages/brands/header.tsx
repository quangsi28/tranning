import {
  EuiPageHeader,
  EuiFlexGroup,
  EuiIcon,
  EuiFlexItem,
  EuiPageHeaderSection,
  EuiButton,
} from '@elastic/eui';
import React from 'react';

export const Header = ({ title, actions }: any) => {
  return (
    <EuiPageHeader alignItems="stretch">
      <EuiFlexGroup direction="row" alignItems="center">
        <EuiIcon type="canvasApp" size="l"></EuiIcon>
        <EuiFlexItem style={{ fontSize: 18 }}>{title}</EuiFlexItem>
      </EuiFlexGroup>
      <EuiPageHeaderSection>{actions}</EuiPageHeaderSection>
    </EuiPageHeader>
  );
};
