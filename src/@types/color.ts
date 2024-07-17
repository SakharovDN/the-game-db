type BaseColorType = 'accent' | 'clear' | 'primary' | 'secondary';

export type BaseColor =
  | `base-${'01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09'}`
  | `base-${BaseColorType}${'' | '-active' | '-hover'}`;

type TextColorType = 'link' | 'negative' | 'positive';

export type TextColor = `text-${'01' | '02' | '03'}` | `text-${TextColorType}${'' | '-hover'}`;

type StatusColorType = 'error' | 'info' | 'neutral' | 'success' | 'warning';

export type StatusColor = `status-${StatusColorType}${'-bg' | '-bg-hover' | '-fill'}`;

export type SupportColor =
  `support-${'01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21'}`;

export type Color = BaseColor | StatusColor | SupportColor | TextColor;
