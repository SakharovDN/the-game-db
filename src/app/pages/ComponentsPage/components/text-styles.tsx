import {
  BodyL,
  BodyLBold,
  BodyM,
  BodyMBold,
  BodyS,
  BodySBold,
  BodyXl,
  BodyXlBold,
  BodyXs,
  BodyXsBold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from '@components/shared';

export const TextStyles = () => {
  return (
    <div className={'text-styles'}>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <Heading5>Heading 5</Heading5>
      <Heading6>Heading 6</Heading6>
      <BodyXlBold>Body Xl Bold</BodyXlBold>
      <BodyXl>Body Xl</BodyXl>
      <BodyLBold>Body L Bold</BodyLBold>
      <BodyL>Body L</BodyL>
      <BodyMBold>Body M Bold</BodyMBold>
      <BodyM>Body M</BodyM>
      <BodySBold>Body S Bold</BodySBold>
      <BodyS>Body S</BodyS>
      <BodyXsBold>Body Xs Bold</BodyXsBold>
      <BodyXs>Body Xs</BodyXs>
    </div>
  );
};
