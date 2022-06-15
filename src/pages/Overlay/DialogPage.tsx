import { useState } from 'react';

import { Button } from '../../components/Button';
import { Dialog } from '../../components/Dialog';
import { Flex } from '../../components/Flex';

export function DialogPage(): JSX.Element {
  const [infoDialog, setInfoDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const [warningDialog, setWarningDialog] = useState(false);
  const [dangerDialog, setDangerDialog] = useState(false);

  return (
    <>
      <Dialog
        isOpen={infoDialog}
        onRequestClose={() => setInfoDialog(false)}
        title="Deactivate account"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
        type="info"
        submitText="Deactivate"
        onSubmit={() => alert('alert info')}
      />
      <Dialog
        isOpen={successDialog}
        onRequestClose={() => setSuccessDialog(false)}
        title="Payment successful"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
        type="success"
        submitText="Deactivate"
        onSubmit={() => alert('alert success')}
      />
      <Dialog
        isOpen={warningDialog}
        onRequestClose={() => setWarningDialog(false)}
        title="Deactivate account"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
        type="warning"
        submitText="Deactivate"
        onSubmit={() => alert('alert warning')}
      />
      <Dialog
        isOpen={dangerDialog}
        onRequestClose={() => setDangerDialog(false)}
        title="Deactivate account"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
        type="danger"
        submitText="Deactivate"
        onSubmit={() => alert('alert danger')}
      />

      <Flex flex justify="center" align="center">
        <Flex gap>
          <Button
            type="button"
            colorScheme="blue"
            onClick={() => setInfoDialog(true)}
          >
            info
          </Button>
          <Button
            type="button"
            colorScheme="green"
            onClick={() => setSuccessDialog(true)}
          >
            success
          </Button>
          <Button
            type="button"
            colorScheme="amber"
            onClick={() => setWarningDialog(true)}
          >
            warning
          </Button>
          <Button
            type="button"
            colorScheme="red"
            onClick={() => setDangerDialog(true)}
          >
            danger
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
