import { CSSProperties } from 'react';

import { useColor } from '@hooks';
import { Color } from '@types';
import classNames from 'classnames';

import './style.scss';

export enum LoaderSize {
  XXL = 80,
  XL = 56,
  L = 40,
  M = 24,
  S = 16,
  XS = 12,
}

interface LoaderProps {
  className?: string;
  color?: Color;
  size?: LoaderSize;
  wrapperClassName?: string;
}

export const Loader = ({ wrapperClassName, ...props }: LoaderProps) => {
  return wrapperClassName ? (
    <div className={wrapperClassName}>
      <LoaderImpl {...props} />
    </div>
  ) : (
    <LoaderImpl {...props} />
  );
};

const thicknessMap = {
  [LoaderSize.XXL]: 4,
  [LoaderSize.XL]: 4,
  [LoaderSize.L]: 3,
  [LoaderSize.M]: 2,
  [LoaderSize.S]: 2,
  [LoaderSize.XS]: 1.5,
};

const LoaderImpl = ({ className, color = 'base-primary', size = LoaderSize.M }: LoaderProps) => {
  const hex = useColor(color);

  const thickness = thicknessMap[size];
  const style = {
    '--color': hex,
    '--size': `${size}px`,
    '--thickness': `${thickness}px`,
  } as CSSProperties;
  const radius = size / 2 - thickness / 2;

  return (
    <svg
      className={classNames('loader', className)}
      style={style}
      viewBox={`0 0 ${size} ${size}`}
      xmlns='http://www.w3.org/2000/svg'>
      <circle className='loader-circle' cx='50%' cy='50%' r={radius} />
    </svg>
  );
};
