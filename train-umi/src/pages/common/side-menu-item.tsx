import { EuiCollapsibleNavGroup, EuiLink } from '@elastic/eui';

export default function SideMenuItem({ theme, menu }: any) {
  const childNavs = () => {
    if (!menu.children) {
      return;
    }
    return menu.children.map((item: any, index: number) => {
      return (
        <EuiLink key={index} color="subdued">
          {item.title}
        </EuiLink>
      );
    });
  };

  const isCollapsible = menu.children && menu.children.length > 0;

  return (
    <EuiCollapsibleNavGroup
      data-test-subj="TEST"
      background={theme}
      title={menu.title}
      isCollapsible={isCollapsible}
      iconType={menu.icon}
      initialIsOpen={false}
    >
      {childNavs()}
    </EuiCollapsibleNavGroup>
  );
}
