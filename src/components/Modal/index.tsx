import { forwardRef, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

import { Heading } from '../Heading';
import { IconButton } from '../IconButton';
import { Overlay, Content, ModalHeader, Size } from './styles';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  size?: Size;
  children: ReactNode;
};

type ModalTitleProps = {
  title: string;
};

const ModalTitle = forwardRef<HTMLSpanElement, ModalTitleProps>(
  ({ title, ...rest }, ref) => {
    return (
      <Heading size="lg" {...rest}>
        {title}
      </Heading>
    );
  },
);

const ModalCloseButton = forwardRef<HTMLSpanElement>((props, ref) => {
  return (
    <IconButton
      // ref={ref}
      type="button"
      variant="ghost"
      colorScheme="gray"
      icon={X}
      {...props}
    />
  );
});

type ModalContentProps = {
  size: Size;
  children: ReactNode;
};

const ModalContent = forwardRef<HTMLSpanElement, ModalContentProps>(
  ({ size, children, ...rest }, ref) => {
    return (
      <Content size={size} {...rest}>
        {children}
      </Content>
    );
  },
);

export function Modal({
  isOpen,
  onRequestClose,
  title,
  size = 'md',
  children,
}: ModalProps): JSX.Element {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onRequestClose}>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Overlay>
            <Dialog.Content asChild>
              <ModalContent size={size}>
                <ModalHeader>
                  <Dialog.Title asChild>
                    <ModalTitle title={title} />
                  </Dialog.Title>

                  <Dialog.Close asChild>
                    <ModalCloseButton />
                  </Dialog.Close>
                </ModalHeader>

                {children}
              </ModalContent>
            </Dialog.Content>
          </Overlay>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}