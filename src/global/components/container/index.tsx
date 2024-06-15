import { BaseContainer } from './styles';
import { IContainer } from './types';

export const Container = ({ children, ...props }: IContainer) => {
  return <BaseContainer {...props}>{children}</BaseContainer>;
};
