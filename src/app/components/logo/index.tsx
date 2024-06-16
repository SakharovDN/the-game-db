import { memo } from 'react';

import { Heading5 } from '@components/shared';

import './style.scss';

export const Logo = memo(function Logo() {
  return (
    <Heading5 className={'logo'}>
      <span className={'the'}>The</span>
      <span className={'game'}>Game</span>
      <span className={'db'}>DB</span>
    </Heading5>
  );
});
