import { ReactNode, ReactPortal, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import './style.scss';

interface PortalProps {
  children?: ReactNode;
  className?: string;
  el?: string;
  id?: string;
}

export const Portal = ({ children, className = 'root-portal', el = 'div', id }: PortalProps): ReactPortal => {
  const [container] = useState(document.createElement(el));

  useEffect(() => {
    className?.split(' ').forEach(className => container.classList.add(className));
    container.id = id || className;
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [className]);

  return createPortal(children, container);
};
