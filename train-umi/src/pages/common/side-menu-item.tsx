import { EuiCollapsibleNavGroup, EuiLink } from '@elastic/eui';

export default function SideMenuItem(props: any) {
  const childNavs = () => {
    if (!props.menu.children) {
      return;
    }
    return props.menu.children.map((item: any, index: number) => {
      return (
        <EuiLink key={index} color="subdued">
          {item.title}
        </EuiLink>
      );
    });
  };

  const isCollapsible = props.menu.children && props.menu.children.length > 0;

  return (
    <EuiCollapsibleNavGroup
      data-test-subj="TEST"
      background={props.theme}
      title={props.menu.title}
      isCollapsible={isCollapsible}
      iconType={props.menu.icon}
      initialIsOpen={false}
    >
      {childNavs()}
    </EuiCollapsibleNavGroup>
  );
}
