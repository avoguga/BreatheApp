import React from 'react';
import { CardImage } from './card-image';
import { CardText } from './card-text';
import { BaseCardContainer } from './styles';
import { ICardContainer } from './types';

export const Card = (props: ICardContainer) => <BaseCardContainer {...props} />;

Card.Image = CardImage;
Card.Text = CardText;
