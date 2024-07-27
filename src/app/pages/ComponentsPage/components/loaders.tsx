import { Loader, LoaderSize } from '@components/shared';

export const Loaders = () => {
  return (
    <div className={'loaders'}>
      {Object.keys(LoaderSize)
        .filter(value => !isNaN(Number(value)))
        .map(size => (
          <div className={'loaders-row'} key={`loader-${size}`}>
            <Loader size={size as unknown as LoaderSize} wrapperClassName='loader-container' />
            <Loader color={'base-accent'} size={size as unknown as LoaderSize} wrapperClassName='loader-container' />
            <Loader color={'support-16'} size={size as unknown as LoaderSize} wrapperClassName='loader-container' />
          </div>
        ))}
    </div>
  );
};
