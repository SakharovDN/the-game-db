import { Logo } from '@components/logo';
import { NavigationTabs } from '@components/navigation-tabs';

import './style.scss';

export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header-left-container'}>
        <Logo />
        <NavigationTabs />
      </div>
    </header>
  );
};
