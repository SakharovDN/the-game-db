import { Link } from 'react-router-dom';

import { BodyS } from '@components/shared';
import classNames from 'classnames';

import { NavigationSection } from '..';

export interface NavigationTabProps {
  active?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  section: NavigationSection;
}

export const NavigationTab = ({ active, onClick, section }: NavigationTabProps) => {
  return (
    <Link className={classNames('navigation-tab', { active })} onClick={onClick} to={section.path}>
      <BodyS className={classNames('navigation-tab-text', { active })}>{section.name}</BodyS>
    </Link>
  );
};
