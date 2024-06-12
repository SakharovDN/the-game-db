import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import './style.scss';

type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type ParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export const Heading1 = ({ className, ...props }: HeadingProps) => {
	return <h1 className={classNames('heading-1', className)} {...props} />;
};

export const Heading2 = ({ className, ...props }: HeadingProps) => {
	return <h2 className={classNames('heading-2', className)} {...props} />;
};

export const Heading3 = ({ className, ...props }: HeadingProps) => {
	return <h3 className={classNames('heading-3', className)} {...props} />;
};

export const Heading4 = ({ className, ...props }: HeadingProps) => {
	return <h4 className={classNames('heading-4', className)} {...props} />;
};

export const Heading5 = ({ className, ...props }: HeadingProps) => {
	return <h5 className={classNames('heading-5', className)} {...props} />;
};

export const Heading6 = ({ className, ...props }: HeadingProps) => {
	return <h6 className={classNames('heading-6', className)} {...props} />;
};

export const BodyXlBold = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-xl-bold', className)} {...props} />;
};

export const BodyXl = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-xl', className)} {...props} />;
};

export const BodyLBold = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-l-bold', className)} {...props} />;
};

export const BodyL = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-l', className)} {...props} />;
};

export const BodyMBold = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-m-bold', className)} {...props} />;
};

export const BodyM = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-m', className)} {...props} />;
};

export const BodySBold = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-s-bold', className)} {...props} />;
};

export const BodyS = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-s', className)} {...props} />;
};

export const BodyXsBold = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-xs-bold', className)} {...props} />;
};

export const BodyXs = ({ className, ...props }: ParagraphProps) => {
	return <p className={classNames('body-xs', className)} {...props} />;
};
