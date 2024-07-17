import { ReactNode } from 'react';

export type OptionLabel = ReactNode | number | string | undefined;

export interface Option<TValue extends string = string, TLabel extends OptionLabel = string> {
  label: TLabel;
  value: TValue;
}
