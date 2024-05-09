import './style.scss';

export const WorkInProgress = () => {
  return (
    <div className={'work-in-progress'}>
      <img src={'/assets/png/work-in-progress.png'} alt={''} />
      <span>Work in progress</span>
      <span>Come back later</span>
    </div>
  );
};
