import React, { useRef } from 'react';

import { FormHandles } from '@unform/core';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import { Input } from '../../components/Form/Input';

export function FormTestPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Flex padding>
      <Card>
        <Flex direction="column" flex>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Flex padding flex>
              <Flex>
                <Input name="name" label="Name" placeholder="Name" />
              </Flex>
              <Flex>
                <Input name="name2" label="Name 2" placeholder="Name 2" />
              </Flex>
            </Flex>

            <Footer>
              <Button type="submit">Send</Button>
            </Footer>
          </Form>
        </Flex>
      </Card>
    </Flex>
  );
}
