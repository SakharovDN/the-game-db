import { useTranslation } from 'react-i18next';

import { Page } from '@components/shared';
import { WorkInProgress } from '@components/work-in-progress';

import './style.scss';

export const DevelopersPage = () => {
  const { t } = useTranslation('developers-page');

  return (
    <Page className={'developers-page'} title={t('title')}>
      <WorkInProgress />
    </Page>
  );
};
