import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

import classNames from 'classnames';

import './style.scss';

interface PageProps {
  children?: ReactNode;
  className?: string;
  title: string;
}

export const Page = ({ children, className, title }: PageProps) => {
  return (
    <div className={classNames('page', className)}>
      <Helmet title={title} />
      {children}
    </div>
  );
};
