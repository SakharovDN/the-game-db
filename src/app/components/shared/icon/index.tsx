import { MouseEventHandler } from 'react';

import classNames from 'classnames';

import './style.scss';

const LARGE_SIZE = 24;
const MEDIUM_SIZE = 16;

export enum IconName {
  CheckCircleLarge = 'check-circle-large',
  CheckCircle = 'check-circle',
  CheckLarge = 'check-large',
  Check = 'check',
  EyeOpenLarge = 'eye-open-large',
  EyeOpen = 'eye-open',
  EyeClosedLarge = 'eye-closed-large',
  EyeClosed = 'eye-closed',
  CloseLarge = 'close-large',
  Close = 'close',
  SearchLarge = 'search-large',
  Search = 'search',
  ChevronDownLarge = 'chevron-down-large',
  ChevronDown = 'chevron-down',
}

interface IconProps {
  className?: string;
  name: IconName;
  onClick?: (() => void) | MouseEventHandler<SVGSVGElement>;
}

export const Icon = ({ className, name, onClick }: IconProps) => {
  const size = name.includes('large') ? LARGE_SIZE : MEDIUM_SIZE;

  return (
    <svg
      className={classNames('svg', className, { clickable: onClick })}
      height={size}
      onClick={onClick}
      style={{ minWidth: size, minHeight: size }}
      width={size}>
      <use xlinkHref={`assets/icons.svg#${name}`} />
    </svg>
  );
};
