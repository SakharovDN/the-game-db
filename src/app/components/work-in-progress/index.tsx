import { BodyXlBold, Heading1 } from '@components/shared';

import './style.scss';

export const WorkInProgress = () => {
	return (
		<div className={'work-in-progress'}>
			<img alt={''} src={'/assets/png/work-in-progress.png'} />
			<Heading1>Work in progress</Heading1>
			<BodyXlBold>Come back later</BodyXlBold>
		</div>
	);
};
