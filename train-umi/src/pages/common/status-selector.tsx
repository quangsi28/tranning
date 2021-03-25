import {
  EuiFormControlLayout,
  EuiFormLabel,
  EuiFormRow,
  EuiHealth,
  EuiSuperSelect,
} from '@elastic/eui';
import React, { useState } from 'react';

const options = [
  {
    value: 'warning',
    inputDisplay: <EuiHealth color="subdued">Tất cả</EuiHealth>,
    'data-test-subj': 'option-warning',
    disabled: true,
  },
  {
    value: 'minor',
    inputDisplay: <EuiHealth color="warning">Đang hoạt động</EuiHealth>,
    'data-test-subj': 'option-minor',
  },
  {
    value: 'critical',
    inputDisplay: <EuiHealth color="danger">Không hoạt động</EuiHealth>,
    'data-test-subj': 'option-critical',
  },
];

export function StatusSelector({ onSelectStatus }: any) {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const onChange = (value: any) => {
    setSelectedValue(value);
    if (onSelectStatus) {
      onSelectStatus(value);
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
