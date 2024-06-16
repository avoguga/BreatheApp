import { BaseContainer } from './styles';
import { IContainer } from './types';

export const Container = ({ ...props }: IContainer) => {
  return <BaseContainer {...props} />;
};
