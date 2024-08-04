import { ReactNode, useEffect, useId, useRef, useState } from 'react';

import classNames from 'classnames';

import { Icon, IconName } from '../icon';
import { BodyLBold, BodyM, BodyMBold, BodyS, BodySBold, BodyXs } from '../typography';

import './style.scss';

type AccordionSize = 'l' | 'm' | 's';
type AccordionType = 'block' | 'card' | 'default';

interface AccordionProps {
  items: AccordionItemContent[];
  size?: AccordionSize;
  type?: AccordionType;
}

export const Accordion = ({ items, size = 'm', type = 'default' }: AccordionProps) => {
  const id = useId();
  const [collapsedState, setCollapsedState] = useState<boolean[]>(
    Array.from<boolean>({ length: items.length }).fill(true)
  );

  return (
    <div className={classNames('accordion', type, size)}>
      {items.map((item, index) => (
        <AccordionItem
          collapsed={collapsedState[index]}
          key={`${id}-${index}`}
          onCollapsedChange={value =>
            setCollapsedState(prev => prev.map((_, prevIndex) => value || index !== prevIndex))
          }
          size={size}
          {...item}
        />
      ))}
    </div>
  );
};

interface AccordionItemContent {
  children: ReactNode;
  description?: ReactNode;
  title: ReactNode;
}

interface AccordionItemProps extends AccordionItemContent {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  size: AccordionSize;
}

const AccordionItem = ({ children, title, description, size, collapsed, onCollapsedChange }: AccordionItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number | undefined>(collapsed ? 0 : undefined);

  useEffect(() => {
    if (!height || collapsed || !ref.current) {
      return undefined;
    }

    const resizeObserver = new ResizeObserver(entry => setHeight(entry[0].contentRect.height));

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [height, collapsed]);

  useEffect(() => {
    setHeight(collapsed ? 0 : ref.current?.getBoundingClientRect().height);
  }, [collapsed]);

  const TitleText = size === 'l' ? BodyLBold : size === 'm' ? BodyMBold : BodySBold;
  const DescriptionText = size === 'l' ? BodyM : size === 'm' ? BodyS : BodyXs;

  return (
    <div className={classNames('accordion-item', size, { collapsed })}>
      <div className={'accordion-item-header'} onClick={() => onCollapsedChange(!collapsed)}>
        <TitleText>{title}</TitleText>
        {description && <DescriptionText className={'accordion-item-description'}>{description}</DescriptionText>}
        <Icon className={'chevron-icon'} name={IconName.ChevronDownLarge} />
      </div>
      <div className={'accordion-item-content'} style={{ height }}>
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
};
