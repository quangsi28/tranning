import {
  EuiPageHeader,
  EuiFlexGroup,
  EuiIcon,
  EuiFlexItem,
  EuiPageHeaderSection,
  EuiButton,
  EuiTitle,
} from '@elastic/eui';
import React from 'react';

export const Header = ({ title, actions }: any) => {
  return (
    <EuiPageHeader alignItems="stretch">
      <EuiFlexGroup direction="row" alignItems="center" gutterSize="m">
        <EuiIcon type="logoElasticStack" size="l" />
        <EuiFlexItem>
          <h1>{title}</h1>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiPageHeaderSection>{actions}</EuiPageHeaderSection>
    </EuiPageHeader>
  );
};
