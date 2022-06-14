import { useContext, useMemo } from 'react';

import * as phosphorIcons from 'phosphor-react';

import { useTheme } from '../../../hooks/theme';
import { SidebarContext } from '../SidebarContext';
import { Container } from './styles';

type MenuItemProps = {
  children: string;
  value: string;

  onClick?: () => void;
  icon?: keyof typeof phosphorIcons;
};

export function MenuItem({
  children,
  value,
  onClick,
  icon: iconName,
}: MenuItemProps): JSX.Element {
  const { colorScheme } = useTheme();

  const { menuItemSelected, selectMenuItem, isExpanded } =
    useContext(SidebarContext);

  const isSelected = useMemo(
    () => menuItemSelected === value,
    [menuItemSelected],
  );

  const shortName = children[0].toUpperCase();

  const icon = iconName ? (phosphorIcons[iconName] as any) : undefined;

  return (
    <Container
      onClick={() => {
        if (selectMenuItem) {
          selectMenuItem(value);
        }

        if (onClick) {
          onClick();
        }
      }}
      isSelected={isSelected}
      colorScheme={colorScheme}
      isExpanded={!!isExpanded}
    >
      {icon &&
        icon.render({ size: 16, weight: isSelected ? 'fill' : 'regular' })}

      {!isExpanded && !icon && shortName}

      {isExpanded && children}
    </Container>
  );
}
