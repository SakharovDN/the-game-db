import { useTranslation } from 'react-i18next';

import { Page } from '@components/shared';
import { WorkInProgress } from '@components/work-in-progress';

import './style.scss';

export const CreatorsPage = () => {
  const { t } = useTranslation('creators-page');

  return (
    <Page className={'creators-page'} title={t('title')}>
      <WorkInProgress />
    </Page>
  );
};
