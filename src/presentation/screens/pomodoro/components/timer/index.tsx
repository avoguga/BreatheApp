import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { TimerContainer, TimerText } from './styles';
import { CircularProgressProps } from './types';

export default function AnimatedCircle({
  size,
  tintColor,
  backgroundColor,
  timeLeft,
  totalDuration,
}: CircularProgressProps) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const fill = timeLeft / totalDuration;
  const progress = circumference * (1 - fill);

  return (
    <TimerContainer>
      <Svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: 'absolute', transform: [{ rotate: '-90deg' }] }}
      >
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={8}
          stroke={backgroundColor}
          fill="transparent"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={8}
          stroke={tintColor}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
        />
      </Svg>
      <TimerText>
        {`${Math.floor(timeLeft / 60)
          .toString()
          .padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`}
      </TimerText>
    </TimerContainer>
  );
}
