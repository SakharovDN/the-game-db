import { ReactNode, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';

import { Icon, IconName } from '../icon';
import { BodyLBold } from '../typography';

import './style.scss';

interface CollapsibleProps {
  children?: ReactNode;
  header: ReactNode;
}

export const Collapsible = ({ children, header }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver(el => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div className={'collapsible-card'}>
      <div className={'collapsible-header'} onClick={() => setIsOpen(prev => !prev)}>
        <BodyLBold className={'title-text'}>{header}</BodyLBold>
        <button className={'collapsible-icon-button'}>
          <Icon className={classnames('rotate-center', isOpen ? 'up' : 'down')} name={IconName.ChevronDown} />
        </button>
      </div>
      <div className={'collapsible-content'} style={{ height }}>
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
};
