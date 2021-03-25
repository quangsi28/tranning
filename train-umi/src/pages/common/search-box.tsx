import {
  EuiFieldSearch,
  EuiFormControlLayout,
  EuiFormLabel,
  EuiFormRow,
  EuiHealth,
  EuiSuperSelect,
} from '@elastic/eui';
import React, { useState } from 'react';

export function SearchBox({ onSearch }: any) {
  const [value, setValue] = useState('');
  const onChange = (value: any) => {
    setValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };
  return (
    <EuiFormRow label="Tìm kiếm" fullWidth>
      <EuiFieldSearch
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </EuiFormRow>
  );
}
