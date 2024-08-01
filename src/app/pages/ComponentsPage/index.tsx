import { useTranslation } from 'react-i18next';

import { Page } from '@components/shared';
import { Collapsible } from '@components/shared/collapsible';

import { Buttons } from './components/buttons';
import { Inputs } from './components/inputs';
import { Loaders } from './components/loaders';
import { TextStyles } from './components/text-styles';

import './style.scss';

export const ComponentsPage = () => {
  const { t } = useTranslation('components-page');

  return (
    <Page className={'components-page'} title={t('title')}>
      <Collapsible header={'Text Styles'}>
        <TextStyles />
      </Collapsible>
      <Collapsible header={'Loader'}>
        <Loaders />
      </Collapsible>
      <Collapsible header={'Buttons'}>
        <Buttons />
      </Collapsible>
      <Collapsible header={'Inputs'}>
        <Inputs />
      </Collapsible>
    </Page>
  );
};
