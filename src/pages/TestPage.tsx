import { useRef } from 'react';

import * as Yup from 'yup';

import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Flex } from '../components/Flex';
import { Footer, FooterLeft } from '../components/Footer';
import { Form, FormHandles } from '../components/Form';
import { RichTextInput } from '../components/Form/RichTextInput';
import { getValidationErrors } from '../helpers/getValidationErrors';

export function TestPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any): Promise<void> {
    try {
      console.log(data);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        editor: Yup.string().required('Campo obrigatório'),
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
    <Card margin direction="column" overflow>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        flex
        direction="column"
        overflow
      >
        <Flex flex direction="column" padding overflow>
          <RichTextInput
            name="editor"
            label="Rich text label"
            placeholder="Rich text placeholder"
          />
        </Flex>
        <Footer>
          <FooterLeft>
            <Button
              type="button"
              variant="secondary"
              colorScheme="red"
              onClick={() => formRef.current?.reset()}
            >
              Clear
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                formRef.current?.setFieldValue(
                  'editor',
                  `<h1>Teste set field value</h1><h2>title 2</h2><ul class="editor-task-list" data-type="taskList"><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>item 1</p></div></li><li data-checked="true" data-type="taskItem"><label><input type="checkbox" checked="checked"><span></span></label><div><p>item 2</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>item 3</p></div></li></ul>`,
                )
              }
            >
              Set data
            </Button>
          </FooterLeft>

          <Button type="submit">Send</Button>
        </Footer>
      </Form>
    </Card>
  );
}
