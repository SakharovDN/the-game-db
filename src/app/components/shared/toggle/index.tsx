import { ChangeEvent, useId } from 'react';

import classNames from 'classnames';

import { Icon, IconName } from '../icon';
import { BodyM, BodyS } from '../typography';

import './style.scss';

type ToggleSize = 'm' | 's';

interface ToggleProps {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: ToggleSize;
}

export const Toggle = ({ checked, disabled, size = 's', label, onChange }: ToggleProps) => {
  const id = useId();
  const LabelComponent = size === 'm' ? BodyM : BodyS;
  const checkedIcon = size === 'm' ? IconName.CheckLarge : IconName.Check;

  return (
    <label className={classNames('toggle', size)} htmlFor={id}>
      <input
        checked={checked}
        className={'toggle-input'}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type={'checkbox'}
      />
      <Icon className={'toggle-checked-icon'} name={checkedIcon} />
      {label && <LabelComponent className={'toggle-label'}>{label}</LabelComponent>}
    </label>
  );
};
