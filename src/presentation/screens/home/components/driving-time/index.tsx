import { DrivingText } from './driving-text';
import { DrivingTimeContainer } from './styles';
import { IDrivingTimeContainer } from './types';

export const DrivingTime = (props: IDrivingTimeContainer) => (
  <DrivingTimeContainer {...props} />
);

DrivingTime.Text = DrivingText;
