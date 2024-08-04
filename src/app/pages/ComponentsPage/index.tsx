import { useTranslation } from 'react-i18next';

import { Accordion, Page } from '@components/shared';

import { Buttons } from './components/buttons';
import { Inputs } from './components/inputs';
import { Loaders } from './components/loaders';
import { Switches } from './components/switches';
import { TextStyles } from './components/text-styles';

import './style.scss';

export const ComponentsPage = () => {
  const { t } = useTranslation('components-page');

  return (
    <Page className={'components-page'} title={t('title')}>
      <Accordion
        items={[
          { title: 'Text Styles', children: <TextStyles /> },
          { title: 'Switches', children: <Switches /> },
          { title: 'Loader', children: <Loaders /> },
          { title: 'Buttons', children: <Buttons /> },
          { title: 'Inputs', children: <Inputs /> },
        ]}
        size='l'
        type={'block'}
      />
    </Page>
  );
};
