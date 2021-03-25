import { EuiBreadcrumbs } from '@elastic/eui';
import React, { PropsWithChildren } from 'react';

export default function Breadcrumb({ breadcrumbs }: any) {
  return <EuiBreadcrumbs breadcrumbs={breadcrumbs} truncate={false} />;
}
