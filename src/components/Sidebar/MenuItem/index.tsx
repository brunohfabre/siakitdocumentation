import { useContext, useMemo } from 'react';

import * as Hi from 'react-icons/hi';

import { useTheme } from '../../../hooks/theme';
import { SidebarContext } from '../SidebarContext';
import { Container } from './styles';

type MenuItemProps = {
  children: string;
  value: string;

  onClick?: () => void;
  icon?: keyof typeof Hi;
};

export function MenuItem({
  children,
  value,
  onClick,
  icon,
}: MenuItemProps): JSX.Element {
  const { colorScheme, theme } = useTheme();

  const { menuItemSelected, selectMenuItem, isExpanded } =
    useContext(SidebarContext);

  const isSelected = useMemo(
    () => menuItemSelected === value,
    [menuItemSelected],
  );

  const shortName = children[0].toUpperCase();

  const Icon = icon ? (Hi[icon] as any) : undefined;

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
      appTheme={theme}
    >
      {Icon && <Icon size="16" />}

      {!isExpanded && !icon && shortName}

      {isExpanded && children}
    </Container>
  );
}
