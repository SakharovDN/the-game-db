import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Heading5, Page } from '@components/shared';
import { useAppDispatch } from '@src/index';
import { getNewReleases, getTopRated, homeSelectors } from '@store/home';

import { Card } from './components/card';
import { Rating } from './components/rating';

import './style.scss';

export const GamesPage = () => {
  const { t } = useTranslation('games-page');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNewReleases({ page: 1, page_size: 10 }));
    dispatch(getTopRated({ page: 1, page_size: 10 }));
  }, []);

  const newReleases = useSelector(homeSelectors.selectNewReleases);
  const topRated = useSelector(homeSelectors.selectTopRated);

  return (
    <Page className={'games-page'} title={t('title')}>
      <div className={'container-row'}>
        <Heading5>New Releases</Heading5>
        <div className={'games-row'}>
          {newReleases.map(release => (
            <Card
              body={<Rating gameId={release.id} rating={release.rating} />}
              image={release.background_image}
              key={release.id}
              title={release.name}
            />
          ))}
        </div>
      </div>
      <div className={'container-row'}>
        <Heading5>Top Rated</Heading5>
        <div className={'games-row'}>
          {topRated.map(release => (
            <Card
              body={<Rating gameId={release.id} rating={release.rating} />}
              image={release.background_image}
              key={release.id}
              title={release.name}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};
