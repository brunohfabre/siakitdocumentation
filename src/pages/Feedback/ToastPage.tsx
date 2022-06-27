import React from 'react';

import { Button } from '../../components/Button';
import { Flex } from '../../components/Flex';
import { toast } from '../../components/Toast';

export function ToastPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Flex gap={8}>
        <Button
          type="button"
          onClick={() =>
            toast.info({ title: 'Toast title', text: 'Toast text content' })
          }
        >
          info
        </Button>
        <Button
          type="button"
          onClick={() =>
            toast.success({ title: 'Toast title', text: 'Toast text content' })
          }
        >
          success
        </Button>
        <Button
          type="button"
          onClick={() =>
            toast.warning({ title: 'Toast title', text: 'Toast text content' })
          }
        >
          warning
        </Button>
        <Button
          type="button"
          onClick={() =>
            toast.danger({ title: 'Toast title', text: 'Toast text content' })
          }
        >
          danger
        </Button>
        <Button
          type="button"
          onClick={() =>
            toast.custom({
              title: 'Toast title',
              message: 'Toast text content',
              urgent: true,
              type: 'INFO',
              timeout: 0,
              actions: [
                {
                  action: 'string',
                  label: 'label',
                  backend: false,
                },
              ],
            })
          }
        >
          urgente
        </Button>
        <Button
          type="button"
          onClick={() =>
            toast.custom({
              title: 'Toast title',
              message: 'Toast text content',
              urgent: false,
              type: 'ERROR',
              timeout: 5000,
              actions: [
                {
                  action: 'string',
                  label: 'label',
                  backend: false,
                },
              ],
            })
          }
        >
          info with button
        </Button>
      </Flex>
    </Flex>
  );
}
