import { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Flex } from '../../components/Flex';
import { Footer, FooterLeft } from '../../components/Footer';
import { Form } from '../../components/Form';
import { Checkbox } from '../../components/Form/Checkbox';
import { ColorPicker } from '../../components/Form/ColorPicker';
import { DatePicker } from '../../components/Form/DatePicker';
import { Input } from '../../components/Form/Input';
import { LanguagePicker } from '../../components/Form/LanguagePicker';
import { MaskInput } from '../../components/Form/MaskInput';
import { MoneyInput } from '../../components/Form/MoneyInput';
import { NumberInput } from '../../components/Form/NumberInput';
import { PasswordInput } from '../../components/Form/PasswordInput';
import { PercentageInput } from '../../components/Form/PercentageInput';
import { PhoneInput } from '../../components/Form/PhoneInput';
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
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigat??rio'),
        age: Yup.string().required('Campo obrigat??rio'),
        phone: Yup.string().required('Campo obrigat??rio'),
        password: Yup.string().required('Campo obrigat??rio'),
        money: Yup.string().required('Campo obrigat??rio'),
        mask: Yup.string().required('Campo obrigat??rio'),
        bio: Yup.string().required('Campo obrigat??rio'),
        color: Yup.string().required('Campo obrigat??rio'),
        switch: Yup.bool().isTrue('Tem que ser true'),
        option: Yup.array().min(1, 'Pelo menos 1'),
        fruit: Yup.string().required('Campo obrigat??rio'),
        date: Yup.string().required('Campo obrigat??rio'),
        time: Yup.string().required('Campo obrigat??rio'),
        language: Yup.string().required('Campo obrigat??rio'),
        slider: Yup.number().min(25, 'Minimo de 25'),
        select: Yup.string().required('Campo obrigat??rio'),
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
            <NumberInput name="age" label="Age" placeholder="Age" />
            <PhoneInput name="phone" label="Phone" placeholder="Phone" />
            <PasswordInput
              name="password"
              label="Password"
              placeholder="Password"
            />
            <MoneyInput name="money" label="Money" placeholder="Money" />
            <MaskInput
              name="mask"
              label="Mask (CPF)"
              placeholder="Mask (CPF)"
              mask="cpf"
              disabled
            />
            <TextArea name="bio" label="Bio" placeholder="Bio" />
            <ColorPicker name="color" label="Color" placeholder="Color" />
            <Switch
              name="switch"
              label="Option 2"
              onChange={(value) => console.log('change', value)}
            />
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

            <LanguagePicker
              name="language"
              label="Language"
              placeholder="Language"
            />

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

            <PercentageInput
              name="percentage"
              label="Percentage"
              placeholder="Percentage"
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
