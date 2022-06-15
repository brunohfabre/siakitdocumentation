import { useRef } from 'react';

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
import { Slider } from '../../components/Form/Slider';
import { Switch } from '../../components/Form/Switch';
import { TextArea } from '../../components/Form/TextArea';
import { TimePicker } from '../../components/Form/TimePicker';
import { getValidationErrors } from '../../helpers/getValidationErrors';

export function FormPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any): Promise<void> {
    try {
      console.log(data);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        select: Yup.string().required('Campo obrigatório'),
        selectmulti: Yup.string().required('Campo obrigatório'),
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
            <Number name="age" label="Age" placeholder="Age" />
            <Phone name="phone" label="Phone" placeholder="Phone" />
            <Password name="password" label="Password" placeholder="Password" />
            <Money name="money" label="Money" placeholder="Money" />
            <Mask
              name="mask"
              label="Mask (CPF)"
              placeholder="Mask (CPF)"
              mask="cpf"
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
              name="option2"
              label="Option 2"
              options={[
                { value: 'default', label: 'Default' },
                { value: 'checked', label: 'Checked' },
              ]}
            />

            <DatePicker name="date" label="Date" placeholder="Date" />

            <TimePicker name="time" label="Time" placeholder="Time" />

            <Language name="language" label="Language" placeholder="Language" />

            <Slider name="silder" label="Slider" />

            <Input name="name" label="Name" placeholder="Name" />

            <Select
              name="select"
              label="Select"
              placeholder="Select"
              options={[
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
                { value: '4', label: 'Option 4' },
                { value: '5', label: 'Option 5' },
              ]}
            />

            <Select
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
              isMulti
            />
          </Flex>
        </Form>
        <Footer>
          <FooterLeft>
            <Button
              type="button"
              onClick={() =>
                formRef.current?.setData({
                  select: '4',
                })
              }
            >
              set data
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
