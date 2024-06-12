import React from 'react';
import { IContainer } from './interface';
import { Container } from './styles';

const TabContainer: React.FC<IContainer> = ({
  children,
  variant = 'bottom',
}) => <Container variant={variant}>{children}</Container>;

export default TabContainer;