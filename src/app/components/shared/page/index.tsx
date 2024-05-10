import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface PageProps {
	children?: ReactNode;
	title: string;
}

export const Page = ({ children, title }: PageProps) => {
	return (
		<>
			<Helmet title={title} />
			{children}
		</>
	);
};
