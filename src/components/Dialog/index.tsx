import React, { forwardRef, ReactNode } from 'react';

import * as RadixDialog from '@radix-ui/react-dialog';

import DangerIcon from '../../assets/icons/dialog/danger.svg';
import InfoIcon from '../../assets/icons/dialog/info.svg';
import SuccessIcon from '../../assets/icons/dialog/success.svg';
import WarningIcon from '../../assets/icons/dialog/warning.svg';
import { Colors } from '../../hooks/theme';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Overlay, Content } from './styles';

type DialogTitleProps = {
  title: string;
};

const DialogTitle = forwardRef<HTMLSpanElement, DialogTitleProps>(
  ({ title, ...rest }) => {
    return (
      <Heading size="lg" {...rest}>
        {title}
      </Heading>
    );
  },
);

type DialogDescriptionProps = {
  description: string;
};

const DialogDescription = forwardRef<HTMLSpanElement, DialogDescriptionProps>(
  ({ description, ...rest }) => {
    return (
      <Text size="md" {...rest}>
        {description}
      </Text>
    );
  },
);

type DialogContentProps = {
  children: ReactNode;
};

const DialogContent = forwardRef<HTMLSpanElement, DialogContentProps>(
  ({ children, ...rest }) => {
    return <Content {...rest}>{children}</Content>;
  },
);

type Type = 'info' | 'success' | 'warning' | 'danger';

type DialogProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  description: string;
  type: Type;
  submitText: string;
  onSubmit: () => void;
  cancelText?: string;
};

export function Dialog({
  isOpen,
  onRequestClose,
  title,
  description,
  type,
  submitText,
  onSubmit,
  cancelText = 'Cancelar',
}: DialogProps): JSX.Element {
  function buttonColorScheme(): Colors {
    if (type === 'success') {
      return 'green';
    }

    if (type === 'warning') {
      return 'amber';
    }

    if (type === 'danger') {
      return 'red';
    }

    return 'blue';
  }

  return (
    <RadixDialog.Root open={isOpen} onOpenChange={onRequestClose}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay>
          <Overlay>
            <RadixDialog.Content asChild>
              <DialogContent>
                {type === 'info' && <img src={InfoIcon} alt="info" />}
                {type === 'success' && <img src={SuccessIcon} alt="success" />}
                {type === 'warning' && <img src={WarningIcon} alt="warning" />}
                {type === 'danger' && <img src={DangerIcon} alt="danger" />}

                <RadixDialog.Title asChild>
                  <DialogTitle title={title} />
                </RadixDialog.Title>

                <RadixDialog.Description asChild>
                  <DialogDescription description={description} />
                </RadixDialog.Description>

                <Flex gap={8}>
                  <Button
                    type="button"
                    variant="secondary"
                    colorScheme="gray"
                    onClick={onRequestClose}
                  >
                    {cancelText}
                  </Button>

                  <Button
                    type="button"
                    colorScheme={buttonColorScheme()}
                    onClick={onSubmit}
                  >
                    {submitText}
                  </Button>
                </Flex>
              </DialogContent>
            </RadixDialog.Content>
          </Overlay>
        </RadixDialog.Overlay>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
