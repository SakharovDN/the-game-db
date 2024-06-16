import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { RoutePath } from '../../routes/route-paths/route-path';

import { NavigationTab } from './components/navigation-tab';

import './style.scss';

export interface NavigationSection {
  name: string;
  path: string;
}

export const NavigationTabs = () => {
  const { pathname } = useLocation();

  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    const activeTab = Object.values(RoutePath).find(path => pathname.includes(path)) || '';
    setActiveTab(activeTab);
  }, [pathname]);

  return (
    <div className={'navigation-content'}>
      {sections.map(section => (
        <NavigationTab active={section.path === activeTab} key={section.path} section={section} />
      ))}
    </div>
  );
};

const sections: NavigationSection[] = [
  {
    name: 'Games',
    path: RoutePath.Games,
  },
  {
    name: 'Developers',
    path: RoutePath.Developers,
  },
  {
    name: 'Creators',
    path: RoutePath.Creators,
  },
];
