import { ReactNode, useRef } from 'react';

import classNames from 'classnames';

import { Modal } from '../modal';

import './style.scss';

interface PopupProps {
  bodyClassName?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  onClose?: () => void;
  onOutsideClick?: () => void;
}

export const Popup = ({ onClose, className, bodyClassName, children, onOutsideClick, id }: PopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <Modal className={className} id={id} onClose={onClose} onOutsideClick={onOutsideClick}>
      <div className={classNames('popup', bodyClassName)} ref={popupRef}>
        {children}
      </div>
    </Modal>
  );
};
