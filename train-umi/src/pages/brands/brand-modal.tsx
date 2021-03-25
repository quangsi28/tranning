import {
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiModalFooter,
  EuiButtonEmpty,
  EuiButton,
  EuiFieldText,
  EuiFormRow,
} from '@elastic/eui';
import { useState } from 'react';

export function BrandModal({ title, brand, onClose }: any) {
  const [name, setName] = useState(brand?.name || '');

  const handleNameChanged = (event: any) => {
    setName(event.target.value);
  };
  return (
    <EuiModal onClose={() => onClose()} initialFocus="[name=popswitch]">
      <EuiModalHeader>
        <EuiModalHeaderTitle>{title}</EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>
        <EuiFormRow label="Tên">
          <EuiFieldText
            defaultValue={name || ''}
            onChange={handleNameChanged}
          ></EuiFieldText>
        </EuiFormRow>
      </EuiModalBody>

      <EuiModalFooter>
        <EuiButtonEmpty onClick={() => onClose()}>Cancel</EuiButtonEmpty>

        <EuiButton onClick={() => onClose()} fill>
          Save
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
}
