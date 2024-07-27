import { MouseEventHandler } from 'react';

import { Color } from '@types';
import classNames from 'classnames';

import { Icon, IconName } from '../icon';
import { Loader, LoaderSize } from '../loader';
import { BodyMBold, BodySBold } from '../typography';

import './style.scss';

export type ButtonSize = 'l' | 'm' | 's' | 'xs';

export type ButtonAppearance = 'accent' | 'flat' | 'outline' | 'primary' | 'secondary';

export interface ButtonProps {
  appearance?: ButtonAppearance;
  children: string;
  className?: string;
  disabled?: boolean;
  icon?: IconName;
  loading?: boolean;
  onClick: (() => void) | MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  title: string;
  type?: 'button' | 'reset' | 'submit';
}

export const Button = ({
  appearance = 'primary',
  children,
  className,
  disabled,
  icon,
  loading,
  onClick,
  size = 'm',
  title,
  type = 'button',
}: ButtonProps) => {
  const TextComponent = size === 'l' || size === 'm' ? BodyMBold : BodySBold;

  const loaderColor: Color | undefined =
    appearance === 'primary' || appearance === 'accent' ? 'base-01' : 'base-primary';
  const loaderSize: LoaderSize | undefined = size === 'l' || size === 'm' ? LoaderSize.M : LoaderSize.S;

  return (
    <button
      className={classNames('button', appearance, size, className, { loading })}
      disabled={disabled || loading}
      onClick={onClick}
      title={title}
      type={type}>
      {icon && <Icon className={'button-icon'} name={icon} />}
      <TextComponent className={'button-text'}>{children}</TextComponent>
      {loading && <Loader color={loaderColor} size={loaderSize} />}
    </button>
  );
};
