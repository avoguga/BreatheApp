import React, { useState } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { useTimer } from '../../hooks/useTimer';
import { modes } from '../utils';
import { TimerContainer, TimerText } from './styles';
import { CircularProgressProps, ModeKeys } from './types';

export default function AnimatedCircle({
  size,
  initialMode,
  tintColor,
  backgroundColor,
}: CircularProgressProps) {
  const [mode, setMode] = useState<ModeKeys>(initialMode);
  const timeLeft = useTimer(mode, setMode);

  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const fill = timeLeft / modes[mode].duration;
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
