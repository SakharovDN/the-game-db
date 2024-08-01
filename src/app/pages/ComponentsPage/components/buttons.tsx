import { BodyMBold, Button, ButtonAppearance, ButtonSize, IconName } from '@components/shared';

const APPEARANCES: ButtonAppearance[] = ['primary', 'accent', 'secondary', 'outline', 'flat'];
const SIZES: ButtonSize[] = ['l', 'm', 's', 'xs'];

export const Buttons = () => {
  return (
    <div className={'buttons'}>
      {APPEARANCES.map(appearance => (
        <div className='buttons' key={appearance}>
          <BodyMBold>{appearance.charAt(0).toUpperCase() + appearance.slice(1)}</BodyMBold>
          <div className={'buttons-row'}>
            {SIZES.map(size => (
              <Button
                appearance={appearance}
                icon={size === 'l' || size === 'm' ? IconName.CheckCircleLarge : IconName.CheckCircle}
                key={`${appearance}-${size}`}
                onClick={() => {}}
                size={size}
                title={''}>
                Button
              </Button>
            ))}
          </div>
          <div className={'buttons-row'}>
            {SIZES.map(size => (
              <Button
                appearance={appearance}
                disabled
                icon={size === 'l' || size === 'm' ? IconName.CheckCircleLarge : IconName.CheckCircle}
                key={`${appearance}-${size}`}
                onClick={() => {}}
                size={size}
                title={''}>
                Button
              </Button>
            ))}
          </div>
          <div className={'buttons-row'}>
            {SIZES.map(size => (
              <Button
                appearance={appearance}
                icon={size === 'l' || size === 'm' ? IconName.CheckCircleLarge : IconName.CheckCircle}
                key={`${appearance}-${size}`}
                loading
                onClick={() => {}}
                size={size}
                title={''}>
                Button
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
