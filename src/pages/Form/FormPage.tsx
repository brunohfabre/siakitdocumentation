import React, { useEffect, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Flex } from '../../components/Flex';
import { Footer, FooterLeft } from '../../components/Footer';
import { Checkbox } from '../../components/Form/Checkbox';
import { Color } from '../../components/Form/Color';
import { DatePicker } from '../../components/Form/DatePicker';
import { Input } from '../../components/Form/Input';
import { Language } from '../../components/Form/Language';
import { Mask } from '../../components/Form/Mask';
import { Money } from '../../components/Form/Money';
import { Number } from '../../components/Form/Number';
import { Password } from '../../components/Form/Password';
import { Phone } from '../../components/Form/Phone';
import { Radio } from '../../components/Form/Radio';
import { Select } from '../../components/Form/Select';
import { SelectMulti } from '../../components/Form/SelectMulti';
import { Slider } from '../../components/Form/Slider';
import { Switch } from '../../components/Form/Switch';
import { TextArea } from '../../components/Form/TextArea';
import { TimePicker } from '../../components/Form/TimePicker';
import { getValidationErrors } from '../../helpers/getValidationErrors';

const newData = {
  age: 25,
  bio: 'My bio',
  color: 'violet',
  date: new Date(),
  fruit: 'apple',
  language: 'pt_BR',
  mask: '468.131.658-01',
  money: '29,90',
  name: 'Bruno Fabre',
  option: ['default'],
  password: 'abcd1234',
  phone: '(19) 98326-2172',
  select: 2,
  selectmulti: ['1', '3'],
  slider: 50,
  switch: true,
  time: '21:40',
};

export function FormPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const [disabled, setDisabled] = useState(false);

  async function handleSubmit(data: any): Promise<void> {
    try {
      console.log(data);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        age: Yup.string().required('Campo obrigatório'),
        phone: Yup.string().required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório'),
        money: Yup.string().required('Campo obrigatório'),
        mask: Yup.string().required('Campo obrigatório'),
        bio: Yup.string().required('Campo obrigatório'),
        color: Yup.string().required('Campo obrigatório'),
        switch: Yup.bool().isTrue('Tem que ser true'),
        option: Yup.array().min(1, 'Pelo menos 1'),
        fruit: Yup.string().required('Campo obrigatório'),
        date: Yup.string().required('Campo obrigatório'),
        time: Yup.string().required('Campo obrigatório'),
        language: Yup.string().required('Campo obrigatório'),
        slider: Yup.number().min(25, 'Minimo de 25'),
        select: Yup.string().required('Campo obrigatório'),
        selectmulti: Yup.array().min(1, 'Pelo menos 1'),
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
      <Flex flex width={1000} direction="column" gap>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            display: 'flex',
            gap: 16,
          }}
        >
          <Flex direction="column" flex gap>
            <Input name="name" label="Name" placeholder="Name" />
            <Input
              name="name2"
              label="Name"
              placeholder="Name"
              disabled={disabled}
              onBlur={() => console.log('input handle blur')}
            />
            <Number name="age" label="Age" placeholder="Age" />
            <Phone name="phone" label="Phone" placeholder="Phone" />
            <Password name="password" label="Password" placeholder="Password" />
            <Money name="money" label="Money" placeholder="Money" />
            <Mask
              name="mask"
              label="Mask (CPF)"
              placeholder="Mask (CPF)"
              mask="cpf"
              disabled
            />
            <TextArea name="bio" label="Bio" placeholder="Bio" />
            <Color name="color" label="Color" placeholder="Color" />
            <Switch name="switch" label="Option 2" />
          </Flex>
          <Flex direction="column" flex gap>
            <Checkbox
              name="option"
              label="Option"
              options={[
                { value: 'default', label: 'Default' },
                { value: 'checked', label: 'Checked' },
              ]}
            />
            <Radio
              name="fruit"
              label="Option 2"
              options={[
                { value: 'apple', label: 'Apple' },
                { value: 'banana', label: 'Banana' },
              ]}
            />

            <DatePicker name="date" label="Date" placeholder="Date" />

            <TimePicker name="time" label="Time" placeholder="Time" />

            <Language name="language" label="Language" placeholder="Language" />

            <Slider name="slider" label="Slider" />

            <Select
              name="select"
              label="Select"
              placeholder="Select"
              options={[
                { value: 1, label: 'Option 1' },
                { value: 2, label: 'Option 2' },
                { value: 3, label: 'Option 3' },
                { value: 4, label: 'Option 4' },
                { value: 5, label: 'Option 5' },
              ]}
              onChange={(value) => console.log(value)}
            />

            <SelectMulti
              name="selectmulti"
              label="Select multi"
              placeholder="Select multi"
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
                { value: '4', label: 'Option 4' },
                { value: '5', label: 'Option 5' },
              ]}
            />
          </Flex>
        </Form>
        <Footer>
          <FooterLeft>
            <Button
              type="button"
              onClick={() => setDisabled(true)}
              colorScheme="crimson"
            >
              set disabled true
            </Button>
            <Button
              type="button"
              onClick={() => formRef.current?.setData(newData)}
            >
              set data
            </Button>

            <Button
              type="button"
              onClick={() =>
                console.log(formRef.current?.getFieldValue('select'))
              }
            >
              get data
            </Button>
          </FooterLeft>

          <Button type="submit" onClick={() => formRef.current?.submitForm()}>
            submit
          </Button>
        </Footer>
      </Flex>
    </Flex>
  );
}
