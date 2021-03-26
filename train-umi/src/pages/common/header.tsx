import { EuiHeader, EuiHeaderLogo, EuiSwitch } from '@elastic/eui';

export default ({ selectedTheme, onThemeChange }: any) => {
  return (
    <EuiHeader
      className="app-header"
      position="fixed"
      sections={[
        {
          items: [<EuiHeaderLogo>{'Kho hàng'}</EuiHeaderLogo>],
          borders: 'none',
        },
        {
          items: [
            <EuiSwitch
              label="Sáng/Tối"
              checked={selectedTheme === 'dark'}
              onChange={(e) => onThemeChange(e)}
            />,
          ],
          borders: 'none',
        },
      ]}
    />
  );
};
