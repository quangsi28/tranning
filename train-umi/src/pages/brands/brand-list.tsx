import {
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiCheckbox,
  EuiHealth,
  EuiLink,
  formatDate,
  htmlIdGenerator,
} from '@elastic/eui';
import { Action } from '@elastic/eui/src/components/basic_table/action_types';
import React, { useEffect, useState } from 'react';

export function BrandList({ brands, onEditBrand, onActiveChange }: any) {
  const [items, setItems] = useState([]);

  const actions = [
    {
      type: 'icon',
      icon: 'managementApp',
      onClick: (brand: any) => onEditBrand(brand),
    },
  ];

  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      field: 'name',
      name: 'Tên',
      sortable: true,
    },
    {
      field: 'createdAt',
      name: 'Ngày tạo',
      align: 'center',
      render: (createdAt: any) => formatDate(createdAt, 'DD/MM/YYYY, HH:mm'),
    },
    {
      field: 'active',
      name: 'Trạng thái',
      dataType: 'boolean',
      render: (active: boolean, item: any) => {
        return (
          <EuiCheckbox
            id={item.id}
            checked={item.active || false}
            onChange={() => onActiveChange(item)}
          />
        );
      },
      align: 'center',
    },
    {
      actions,
      width: '10%',
    },
  ];

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

  useEffect(() => {
    setItems(brands.filter((brand: any, index: number) => index < 10));
  }, [brands]);

  return (
    <EuiBasicTable
      items={items}
      rowHeader="firstName"
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
      hasActions={true}
    />
  );
}
