import { ChangeEvent, useCallback, useId, useState } from 'react';

import classNames from 'classnames';

import { Icon, IconName } from '../icon';
import { BodyS, BodyXs } from '../typography';

import '../input/style.scss';

type InputSize = 'l' | 'm' | 's';

type InputProps = {
  disabled?: boolean;
  error?: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: InputSize;
  type?: 'number' | 'password' | 'search';
  value?: number | string;
};

export const Input = ({ label, type, size = 'm', disabled, placeholder, value, onChange, error }: InputProps) => {
  const [passwordHide, setPasswordHide] = useState<boolean>(true);
  const id = useId();

  const getType = (): string | undefined => (type === 'password' && !passwordHide ? undefined : type);
  const LabelComponent = size === 'l' ? BodyS : BodyXs;

  const renderSuffixIcon = useCallback(() => {
    if (type === 'password') {
      const iconName = passwordHide
        ? size === 's'
          ? IconName.EyeOpen
          : IconName.EyeOpenLarge
        : size === 's'
          ? IconName.EyeClosed
          : IconName.EyeClosedLarge;
      return (
        <Icon
          className={classNames('input-icon', 'suffix-icon')}
          name={iconName}
          onClick={() => setPasswordHide(prevState => !prevState)}
        />
      );
    }

    if (type === 'search' && value) {
      const iconName = size === 's' ? IconName.Close : IconName.CloseLarge;
      return (
        <Icon
          className={classNames('input-icon', 'suffix-icon')}
          name={iconName}
          onClick={() => onChange?.({ target: { value: '' } } as ChangeEvent<HTMLInputElement>)}
        />
      );
    }
  }, [passwordHide, size, type, value, onChange]);

  return (
    <div className={'input-form'}>
      {label && (
        <label htmlFor={id}>
          <LabelComponent className={'label'}>{label}</LabelComponent>
        </label>
      )}
      <div className={classNames('input-field', size, type, { error, disabled })}>
        {type === 'search' && (
          <Icon
            className={classNames('input-icon', 'prefix-icon')}
            name={size === 's' ? IconName.Search : IconName.SearchLarge}
          />
        )}
        <input
          className={'input'}
          disabled={disabled}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={getType()}
          value={value}
        />
        {renderSuffixIcon()}
      </div>
      {error && <BodyS className={'error'}>{error}</BodyS>}
    </div>
  );
};
