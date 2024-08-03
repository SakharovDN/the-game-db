import { BodyXlBold, Heading1 } from '@components/shared';
import { environment } from '@src/environment';

import './style.scss';

export const WorkInProgress = () => {
  return (
    <div className={'work-in-progress'}>
      <img alt={''} src={`${environment.baseUrl}assets/png/work-in-progress.png`} />
      <Heading1>Work in progress</Heading1>
      <BodyXlBold>Come back later</BodyXlBold>
    </div>
  );
};
