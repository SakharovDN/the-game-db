import { ReactNode } from 'react';

import classNames from 'classnames';

import { Button } from '../button';
import { Popup } from '../popup';
import { BodyM, Heading4 } from '../typography';

import './style.scss';

type DialogSize = 'm' | 's' | 'xs';

interface DialogProps {
  body: ReactNode;
  className?: string;
  content?: ReactNode;
  id?: string;
  onClose: () => void;
  onOutsideClick?: () => void;
  onSubmit: () => void;
  size?: DialogSize;
  submitString?: string;
  title: ReactNode;
}

export const Dialog = ({
  onClose,
  onSubmit,
  onOutsideClick,
  size = 'm',
  submitString,
  content,
  body,
  title,
  className,
  id,
}: DialogProps) => {
  return (
    <Popup className={className} id={id} onClose={onClose} onOutsideClick={onOutsideClick || onClose}>
      <div className={classNames('dialog', size)}>
        <Heading4>{title}</Heading4>
        {content && <BodyM>{content}</BodyM>}
        <div className={'dialog-body'}>{body}</div>
        <div className={'dialog-footer'}>
          <Button
            appearance={size === 'xs' ? 'secondary' : 'flat'}
            className={'cancel-button'}
            onClick={onClose}
            size={size === 'm' ? 'l' : 'm'}
            title='Cancel'>
            Cancel
          </Button>
          <Button
            className={'submit-button'}
            onClick={onSubmit}
            size={size === 'm' ? 'l' : 'm'}
            title={submitString || 'Submit'}>
            {submitString || 'Submit'}
          </Button>
        </div>
      </div>
    </Popup>
  );
};
