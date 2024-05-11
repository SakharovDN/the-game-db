import { Page } from '@components/shared';
import { WorkInProgress } from '@components/work-in-progress';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './style.scss';

export const HomePage = () => {
	const { t } = useTranslation('home-page');
	// const dispatch = useAppDispatch();

	useEffect(() => {
		// dispatch(getNewReleases({ page: 0, page_size: 10 }));
	}, []);

	// const newReleases = useSelector(homeSelectors.selectNewReleases);

	return (
		<Page title={t('title')}>
			<div className={'home-page'}>
				<WorkInProgress />
			</div>
		</Page>
	);
};
