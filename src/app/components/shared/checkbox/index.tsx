import { ChangeEvent, useId } from 'react';

import classNames from 'classnames';

import { Icon, IconName } from '../icon';
import { BodyM, BodyS } from '../typography';

import './style.scss';

type CheckboxSize = 'm' | 's';

interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: CheckboxSize;
}

export const Checkbox = ({ checked, disabled, size = 's', label, onChange }: CheckboxProps) => {
  const id = useId();
  const LabelComponent = size === 'm' ? BodyM : BodyS;
  const checkedIcon = size === 'm' ? IconName.CheckLarge : IconName.Check;

  return (
    <label className={classNames('checkbox', size)} htmlFor={id}>
      <input
        checked={checked}
        className={'checkbox-input'}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type={'checkbox'}
      />
      <Icon className={'checkbox-checked-icon'} name={checkedIcon} />
      {label && <LabelComponent className={'checkbox-label'}>{label}</LabelComponent>}
    </label>
  );
};
