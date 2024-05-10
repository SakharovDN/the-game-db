import './style.scss';

export const WorkInProgress = () => {
  return (
    <div className={'work-in-progress'}>
      <img alt={''} src={'/assets/png/work-in-progress.png'} />
      <span>Work in progress</span>
      <span>Come back later</span>
    </div>
  );
};
