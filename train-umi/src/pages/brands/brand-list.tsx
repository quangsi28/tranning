import {
  EuiBasicTableColumn,
  formatDate,
  EuiCheckbox,
  htmlIdGenerator,
  EuiBasicTable,
} from '@elastic/eui';
import React, { useEffect, useState } from 'react';

export function BrandList({
  brands,
  onEditBrand,
  onActiveChange,
  onTableChange,
  pagination,
}: any) {
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
      render: (active: any, item: any) => {
        return (
          <EuiCheckbox
            id={htmlIdGenerator()()}
            checked={active}
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

  const _pagination = {
    pageIndex: pagination.pageIndex,
    pageSize: pagination.pageSize,
    totalItemCount: pagination.totalItemCount,
    pageSizeOptions: [10, 15, 20],
    hidePerPageOptions: false,
  };

  console.log(_pagination);

  useEffect(() => {
    setItems(brands);
  }, [brands]);

  return (
    <EuiBasicTable
      items={items}
      columns={columns}
      hasActions={true}
      pagination={_pagination}
      onChange={(e) => onTableChange(e)}
    />
  );
}
