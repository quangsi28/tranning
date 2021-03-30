import {
  EuiFormControlLayout,
  EuiFormLabel,
  EuiFormRow,
  EuiHealth,
  EuiSuperSelect,
} from '@elastic/eui';
import React, { useState } from 'react';

export const APP_STATUS = {
  all: 'all',
  active: 'active',
  inactive: 'inactive',
};

const options = [
  {
    value: APP_STATUS.all,
    inputDisplay: <EuiHealth color="subdued">Tất cả</EuiHealth>,
    'data-test-subj': 'option-warning',
  },
  {
    value: APP_STATUS.active,
    inputDisplay: <EuiHealth color="warning">Đang hoạt động</EuiHealth>,
    'data-test-subj': 'option-minor',
  },
  {
    value: APP_STATUS.inactive,
    inputDisplay: <EuiHealth color="danger">Không hoạt động</EuiHealth>,
    'data-test-subj': 'option-critical',
  },
];

export function StatusSelector({ onStatusChange }: any) {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const onChange = (value: any) => {
    setSelectedValue(value);
    if (onStatusChange) {
      onStatusChange(value);
    }
  };
  return (
    <EuiFormRow label="Trạng thái" fullWidth>
      <EuiSuperSelect
        options={options}
        valueOfSelected={selectedValue}
        onChange={(value) => onChange(value)}
      />
    </EuiFormRow>
  );
}
