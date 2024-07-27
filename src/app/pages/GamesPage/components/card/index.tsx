import { ReactNode } from 'react';

import { BodyXl } from '@components/shared';

import './style.scss';

interface CardProps {
  body?: ReactNode;
  image?: string;
  title: ReactNode;
}
export const Card = ({ image, body, title }: CardProps) => {
  return (
    <div className={'card'}>
      <img className={'card-image'} src={image} />
      <BodyXl>{title}</BodyXl>
      {body}
    </div>
  );
};
