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
    <EuiPageHeader alignItems="stretch">
      <EuiFlexGroup direction="row" alignItems="center" gutterSize="m">
        <EuiIcon type="logoElasticStack" size="m" />
        <EuiFlexItem>
          <EuiText size="s">
            <h4>{title}</h4>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiPageHeaderSection>{actions}</EuiPageHeaderSection>
    </EuiPageHeader>
  );
};
