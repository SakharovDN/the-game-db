import { Color } from '@types';

export const useColor = (color: Color): string => {
  const computedStyle = getComputedStyle(document.documentElement);
  return computedStyle.getPropertyValue(`--${color}`);
};
