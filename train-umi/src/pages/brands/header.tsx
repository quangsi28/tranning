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
          <EuiTitle size="xxs" textTransform="uppercase">
            <h3>{title}</h3>
          </EuiTitle>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiPageHeaderSection>{actions}</EuiPageHeaderSection>
    </EuiPageHeader>
  );
};
