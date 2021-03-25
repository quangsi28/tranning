import {
  EuiFormControlLayout,
  EuiFormLabel,
  EuiFormRow,
  EuiHealth,
  EuiSuperSelect,
} from '@elastic/eui';
import React, { useState } from 'react';

export const AppStatus = {
  all: 'all',
  active: 'active',
  inactive: 'inactive',
};

const options = [
  {
    value: AppStatus.all,
    inputDisplay: <EuiHealth color="subdued">Tất cả</EuiHealth>,
    'data-test-subj': 'option-warning',
  },
  {
    value: AppStatus.active,
    inputDisplay: <EuiHealth color="warning">Đang hoạt động</EuiHealth>,
    'data-test-subj': 'option-minor',
  },
  {
    value: AppStatus.inactive,
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
