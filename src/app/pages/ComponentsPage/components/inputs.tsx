import { Input } from '@components/shared';

export const Inputs = () => {
  return (
    <div className={'inputs'}>
      <div className={'inputs-row'}>
        <Input label='Label' placeholder='Placeholder' size={'l'} />
        <Input label='Label' placeholder='Placeholder' size={'m'} />
        <Input label='Label' placeholder='Placeholder' size={'s'} />
      </div>
      <div className={'inputs-row'}>
        <Input error='Some Error Text' placeholder='Placeholder' size={'l'} />
        <Input error='Some Error Text' placeholder='Placeholder' size={'m'} />
        <Input error='Some Error Text' placeholder='Placeholder' size={'s'} />
      </div>
      <div className={'inputs-row'}>
        <Input placeholder='Placeholder' size={'l'} type={'search'} />
        <Input placeholder='Placeholder' size={'m'} type={'search'} />
        <Input placeholder='Placeholder' size={'s'} type={'search'} />
      </div>
      <div className={'inputs-row'}>
        <Input placeholder='Placeholder' size={'l'} type={'password'} />
        <Input placeholder='Placeholder' size={'m'} type={'password'} />
        <Input placeholder='Placeholder' size={'s'} type={'password'} />
      </div>
    </div>
  );
};
