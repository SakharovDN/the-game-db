import { ReactNode } from 'react';

import classnames from 'classnames';

import { Portal } from '..';

import './style.scss';

interface ModalProps {
  backdropClassName?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  onClose?: () => void;
  onOutsideClick?: () => void;
}

export const Modal = ({ id, onOutsideClick, children, className, backdropClassName }: ModalProps) => {
  return (
    <Portal className={className} id={id}>
      {children}
      <div className={classnames(`modal-backdrop`, backdropClassName)} onClick={onOutsideClick} />
    </Portal>
  );
};
