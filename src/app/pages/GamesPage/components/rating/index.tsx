import { BodyXsBold } from '@components/shared';
import { useColor } from '@hooks';

import './style.scss';

const SIZE = 16;

interface RatingProps {
  gameId: number;
  rating: number;
}

export const Rating = ({ rating, gameId }: RatingProps) => {
  const backgroundColor = useColor('status-neutral-fill');
  const accentColor = useColor('base-accent');

  const ratingStars = convertToPercentArray(rating);

  return (
    <div className={'rating'}>
      {ratingStars.map((value, index) => (
        <svg
          fill='none'
          height={SIZE}
          key={index}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          width={SIZE}
          xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient id={`grad-${gameId}-${index}`} x1='0%' x2='100%'>
              <stop offset={`${value}%`} style={{ stopColor: accentColor, stopOpacity: 1 }} />
              <stop offset={`${value}%`} style={{ stopColor: backgroundColor, stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d='M5.72548 5.49065L7.45748 2.00265C7.50789 1.9017 7.58543 1.8168 7.6814 1.75746C7.77737 1.69812 7.88798 1.66669 8.00081 1.66669C8.11364 1.66669 8.22425 1.69812 8.32022 1.75746C8.41619 1.8168 8.49373 1.9017 8.54414 2.00265L10.2761 5.49065L14.1481 6.05332C14.2598 6.0688 14.3649 6.11538 14.4514 6.18772C14.5379 6.26007 14.6023 6.35527 14.6372 6.46247C14.6722 6.56966 14.6763 6.68452 14.6491 6.79395C14.622 6.90338 14.5645 7.00295 14.4835 7.08132L11.6821 9.79465L12.3435 13.628C12.4281 14.12 11.9081 14.4946 11.4635 14.2626L8.00081 12.452L4.53748 14.2626C4.09348 14.4953 3.57348 14.12 3.65814 13.6273L4.31948 9.79398L1.51814 7.08065C1.43747 7.00223 1.38041 6.90275 1.35345 6.79352C1.3265 6.68429 1.33072 6.56969 1.36566 6.46275C1.40059 6.3558 1.46482 6.2608 1.55106 6.18854C1.63729 6.11628 1.74207 6.06966 1.85348 6.05398L5.72548 5.49065Z'
            fill={`url(#grad-${gameId}-${index})`}
          />
        </svg>
      ))}
      <BodyXsBold>{rating}</BodyXsBold>
    </div>
  );
};

const convertToPercentArray = (inputNumber: number) => {
  let remaining = inputNumber * 100;

  const result = Array(5)
    .fill(0)
    .map(() => {
      if (remaining >= 100) {
        remaining -= 100;
        return 100;
      } else {
        const value = Math.round(remaining);
        remaining = 0;
        return value;
      }
    });

  return result;
};
