import { ChangeEvent, useId } from 'react';

import classNames from 'classnames';

import { BodyM, BodyS } from '../typography';

import './style.scss';

type RadioButtonSize = 'm' | 's';

interface RadioButtonProps {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: RadioButtonSize;
}

export const RadioButton = ({ checked, disabled, size = 's', label, onChange }: RadioButtonProps) => {
  const id = useId();
  const LabelComponent = size === 'm' ? BodyM : BodyS;

  return (
    <label className={classNames('radio', size)} htmlFor={id}>
      <input
        checked={checked}
        className={'radio-input'}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type={'radio'}
      />
      {label && <LabelComponent className={'radio-label'}>{label}</LabelComponent>}
    </label>
  );
};
