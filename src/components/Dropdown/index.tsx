import { ReactNode, forwardRef } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Separator } from '../Separator';
import { Text } from '../Text';
import { Content, Item, Type } from './styles';

type Option = {
  type?: 'label' | 'separator' | undefined;
  text?: string;
  onClick?: () => void;
  style?: Type;
};

type IconButtonProps = {
  children: ReactNode;
};

const TriggerButton = forwardRef<HTMLSpanElement, IconButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <span {...rest} ref={ref} aria-label="Customise options">
        {children}
      </span>
    );
  },
);

const SeparatorContent = forwardRef<HTMLButtonElement>(() => {
  return <Separator />;
});

type DropdownProps = {
  options: Option[];
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export function Dropdown({
  options,
  side = 'bottom',
  children,
}: DropdownProps): JSX.Element {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <TriggerButton>{children}</TriggerButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content sideOffset={4} side={side}>
        <Content>
          {options.map(({ type, text, onClick, style }) => {
            if (type === 'label') {
              return <DropdownMenu.Label>label 1</DropdownMenu.Label>;
            }

            if (type === 'separator') {
              return (
                <DropdownMenu.Separator asChild>
                  <SeparatorContent />
                </DropdownMenu.Separator>
              );
            }

            return (
              <DropdownMenu.Item asChild>
                <Item onClick={onClick} type={style}>
                  <Text size="sm">{text}</Text>
                </Item>
              </DropdownMenu.Item>
            );
          })}
        </Content>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
