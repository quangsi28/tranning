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

export function BrandModal({ title, onClose }: any) {
  return (
    <EuiModal onClose={() => onClose()} initialFocus="[name=popswitch]">
      <EuiModalHeader>
        <EuiModalHeaderTitle>{title}</EuiModalHeaderTitle>
      </EuiModalHeader>

      <EuiModalBody>
        <EuiFormRow label="Tên" display="row">
          <EuiFieldText />
        </EuiFormRow>
      </EuiModalBody>

      <EuiModalFooter>
        <EuiButtonEmpty onClick={() => onClose()}>Cancel</EuiButtonEmpty>

        <EuiButton onClick={() => onClose(true)} fill>
          Save
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
}
