import {
  EuiPageHeader,
  EuiFlexGroup,
  EuiIcon,
  EuiFlexItem,
  EuiPageHeaderSection,
  EuiButton,
  EuiTitle,
  EuiText,
} from '@elastic/eui';
import React from 'react';

export const Header = ({ title, actions }: any) => {
  return (
    <EuiPageHeader alignItems="center">
      <EuiPageHeaderSection>
        <EuiFlexGroup direction="row" alignItems="center" gutterSize="m">
          <EuiIcon type="logoElasticStack" size="m" />
          <EuiFlexItem>
            <h4>{title}</h4>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageHeaderSection>

      <EuiPageHeaderSection>{actions}</EuiPageHeaderSection>
    </EuiPageHeader>
  );
};
