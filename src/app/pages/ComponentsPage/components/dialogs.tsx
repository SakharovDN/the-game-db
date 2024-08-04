import { useState } from 'react';

import { BodyM, Button, Input } from '@components/shared';
import { Dialog } from '@components/shared/dialog';
import { faker } from '@faker-js/faker';

export const Dialogs = () => {
  const [dialogSizeMOpen, setDialogSizeMOpen] = useState<boolean>(false);
  const [dialogSizeSOpen, setDialogSizeSOpen] = useState<boolean>(false);
  const [dialogSizeXsOpen, setDialogSizeXsOpen] = useState<boolean>(false);

  return (
    <>
      <div className={'dialog-buttons'}>
        <BodyM>Click on the Buttons</BodyM>
        <Button onClick={() => setDialogSizeMOpen(true)} title={'Dialog Size M'}>
          Dialog Size M
        </Button>
        <Button onClick={() => setDialogSizeSOpen(true)} title={'Dialog Size S'}>
          Dialog Size S
        </Button>
        <Button onClick={() => setDialogSizeXsOpen(true)} title={'Dialog Size XS'}>
          Dialog Size XS
        </Button>
      </div>
      {dialogSizeMOpen && (
        <Dialog
          body={
            <>
              <Input label='Label' size='l' />
              <Input label='Label' size='l' />
            </>
          }
          content={'Content'}
          onClose={() => setDialogSizeMOpen(false)}
          onSubmit={() => setDialogSizeMOpen(false)}
          size='m'
          title={'Title'}
        />
      )}
      {dialogSizeSOpen && (
        <Dialog
          body={<BodyM>{faker.lorem.paragraphs()}</BodyM>}
          onClose={() => setDialogSizeSOpen(false)}
          onSubmit={() => setDialogSizeSOpen(false)}
          size='s'
          title={'Title'}
        />
      )}
      {dialogSizeXsOpen && (
        <Dialog
          body={
            <>
              <Input label='Label' size='m' />
              <Input label='Label' size='m' />
            </>
          }
          content={'Content'}
          onClose={() => setDialogSizeXsOpen(false)}
          onSubmit={() => setDialogSizeXsOpen(false)}
          size='xs'
          title={'Title'}
        />
      )}
    </>
  );
};
