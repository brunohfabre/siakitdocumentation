import { useState } from 'react';

import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import { Text } from '../components/Text';

export function ModalPage(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        title="Modal test"
      >
        <Flex padding="0 16px 16px">
          <Text size="md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            accusantium nostrum repudiandae reprehenderit quo laudantium sint
            consequuntur exercitationem blanditiis rem odit? Cupiditate,
            provident totam beatae vero laborum corrupti magnam dolore.
          </Text>
        </Flex>

        <Footer>
          <Button type="button">button 1</Button>
        </Footer>
      </Modal>

      <Flex flex justify="center" align="center">
        <Button type="button" onClick={() => setModalVisible(true)}>
          open modal
        </Button>
      </Flex>
    </>
  );
}
