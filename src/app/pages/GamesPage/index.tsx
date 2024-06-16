import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Heading4, Page } from '@components/shared';
import { WorkInProgress } from '@components/work-in-progress';
import { RoutePath } from '@src/app/routes/route-paths/route-path';
import { history } from '@src/history';

import './style.scss';

export const GamesPage = () => {
  const { t } = useTranslation('games-page');
  // const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getNewReleases({ page: 0, page_size: 10 }));
  }, []);

  // const newReleases = useSelector(homeSelectors.selectNewReleases);

  return (
    <Page className={'games-page'} title={t('title')}>
      <WorkInProgress />
      <button onClick={() => history.push(RoutePath.Developers)}>
        <Heading4>Qwe</Heading4>
      </button>
    </Page>
  );
};
