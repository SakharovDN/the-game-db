import { useState } from 'react';

import { BodyMBold, Checkbox } from '@components/shared';
import { RadioButton } from '@components/shared/radio-button';
import { Toggle } from '@components/shared/toggle';

export const Switches = () => {
  const [value1, setValue1] = useState<boolean>(true);
  const [value2, setValue2] = useState<boolean>(false);
  return (
    <div className={'switches'}>
      <div className={'switches-container'}>
        <BodyMBold>Checkboxes</BodyMBold>
        <div className={'switch-inputs'}>
          <Checkbox checked={value1} label={'Label'} onChange={e => setValue1(e.target.checked)} size={'m'} />
          <Checkbox checked={value1} disabled label={'Label'} onChange={e => setValue1(e.target.checked)} size={'m'} />
          <Checkbox checked={value2} label={'Label'} onChange={e => setValue2(e.target.checked)} size={'s'} />
          <Checkbox checked={value2} disabled label={'Label'} onChange={e => setValue2(e.target.checked)} size={'s'} />
        </div>
      </div>
      <div className={'switches-container'}>
        <BodyMBold>Radio</BodyMBold>
        <div className={'switch-inputs'}>
          <RadioButton checked={value1} label={'Label'} onChange={e => setValue1(e.target.checked)} size={'m'} />
          <RadioButton
            checked={value1}
            disabled
            label={'Label'}
            onChange={e => setValue1(e.target.checked)}
            size={'m'}
          />
          <RadioButton checked={value2} label={'Label'} onChange={e => setValue2(e.target.checked)} size={'s'} />
          <RadioButton
            checked={value2}
            disabled
            label={'Label'}
            onChange={e => setValue2(e.target.checked)}
            size={'s'}
          />
        </div>
      </div>
      <div className={'switches-container'}>
        <BodyMBold>Toggle</BodyMBold>
        <div className={'switch-inputs'}>
          <Toggle checked={value1} label={'Label'} onChange={e => setValue1(e.target.checked)} size={'m'} />
          <Toggle checked={value1} disabled label={'Label'} onChange={e => setValue1(e.target.checked)} size={'m'} />
          <Toggle checked={value2} label={'Label'} onChange={e => setValue2(e.target.checked)} size={'s'} />
          <Toggle checked={value2} disabled label={'Label'} onChange={e => setValue2(e.target.checked)} size={'s'} />
        </div>
      </div>
    </div>
  );
};
