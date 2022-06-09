import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Footer } from '../components/Footer';
import { Input } from '../components/Form/Input';
import { getValidationErrors } from '../helpers/getValidationErrors';

export function FormPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any): Promise<void> {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
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
    <Flex flex justify="center" align="center">
      <Flex width={440}>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          <Input name="name" label="Name" placeholder="Name" />
          <Input name="age" label="Age" placeholder="Age" disabled />

          <Footer>
            <Button type="submit">submit</Button>
          </Footer>
        </Form>
      </Flex>
    </Flex>
  );
}
