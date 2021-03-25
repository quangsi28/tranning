import { EuiBasicTable, EuiHealth, EuiLink, formatDate } from '@elastic/eui';
import React from 'react';

export function BrandList(props: any) {
  const columns = [
    {
      field: 'firstName',
      name: 'First Name',
      sortable: true,
      'data-test-subj': 'firstNameCell',
      mobileOptions: {
        render: (item: any) => (
          <span>
            {item.firstName}{' '}
            <EuiLink href="#" target="_blank">
              {item.lastName}
            </EuiLink>
          </span>
        ),
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true,
      },
    },
    {
      field: 'lastName',
      name: 'Last Name',
      truncateText: true,
      render: (name: any) => (
        <EuiLink href="#" target="_blank">
          {name}
        </EuiLink>
      ),
      mobileOptions: {
        show: false,
      },
    },
    {
      field: 'github',
      name: 'Github',
    },
    {
      field: 'dateOfBirth',
      name: 'Date of Birth',
      dataType: 'date',
      render: (date: any) => formatDate(date, 'dobLong'),
    },
    {
      field: 'online',
      name: 'Online',
      dataType: 'boolean',
      render: (online: any) => {
        const color = online ? 'success' : 'danger';
        const label = online ? 'Online' : 'Offline';
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
    },
  ];

  const items = props.brands.filter((brand: any, index: number) => index < 10);

  const getRowProps = (item: any) => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      className: 'customRowClass',
      onClick: () => {},
    };
  };

  const getCellProps = (item: any, column: any) => {
    const { id } = item;
    const { field } = column;
    return {
      className: 'customCellClass',
      'data-test-subj': `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  return (
    <EuiBasicTable
      items={items}
      rowHeader="firstName"
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
  );
}
