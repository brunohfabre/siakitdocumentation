import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Footer } from '../components/Footer';
import { Checkbox } from '../components/Form/Checkbox';
import { Color } from '../components/Form/Color';
import { DatePicker } from '../components/Form/DatePicker';
import { Input } from '../components/Form/Input';
import { Language } from '../components/Form/Language';
import { Mask } from '../components/Form/Mask';
import { Money } from '../components/Form/Money';
import { Number } from '../components/Form/Number';
import { Password } from '../components/Form/Password';
import { Phone } from '../components/Form/Phone';
import { Radio } from '../components/Form/Radio';
import { Slider } from '../components/Form/Slider';
import { Switch } from '../components/Form/Switch';
import { TextArea } from '../components/Form/TextArea';
import { TimePicker } from '../components/Form/TimePicker';
import { getValidationErrors } from '../helpers/getValidationErrors';

export function FormPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any): Promise<void> {
    try {
      console.log(data);
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
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* <Input name="name" label="Name" placeholder="Name" />
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

          <Switch name="switch" label="Option 2" />

          <DatePicker name="date" label="Date" placeholder="Date" /> */}

          {/* <TimePicker name="time" label="Time" placeholder="Time" /> */}

          <Language name="language" label="Language" placeholder="Language" />

          <Slider name="silder" label="Slider" />

          <Footer>
            <Button type="submit">submit</Button>
          </Footer>
        </Form>
      </Flex>
    </Flex>
  );
}
