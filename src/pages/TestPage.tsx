import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Form } from '../components/Form';
import { Pin } from '../components/Form/Pin';
import { getValidationErrors } from '../helpers/getValidationErrors';

export function TestPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any): Promise<void> {
    try {
      console.log(data);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        pin: Yup.string().required('Campo obrigatório').min(6),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <Flex width={320} padding>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Flex direction="column" gap={32}>
          <Pin name="pin" label="Pin label" disabled />
          <Button type="submit">Send</Button>
          <Button
            type="button"
            onClick={() => formRef.current?.setFieldValue('pin', '123456')}
          >
            set data
          </Button>
          <Button type="button" onClick={() => formRef.current?.reset()}>
            clear
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
}
