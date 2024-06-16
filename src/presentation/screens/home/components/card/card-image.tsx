import { BackgroundImage, Overlay } from './styles';
import { ICardImage } from './types';

export const CardImage = (props: ICardImage) => (
  <BackgroundImage {...props}>
    <Overlay />
    {props.children}
  </BackgroundImage>
);
