import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent, TouchableOpacity, View } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { colors } from '@/presentation/constants/colors';
import {
  AccordionTitle,
  AnimatedContainer,
  FlexView,
  InfoContainer,
  OptionContainer,
  OptionText,
  RowView,
  SelectedIcon,
} from './styles';
import { IAccordion } from './types';

const INITIAL_CONTAINER_HEIGHT = 58;

interface AccordionProps extends IAccordion {
  selectedValue: string;
}

export const Accordion = ({
  data,
  collapsable,
  accordionTitle,
  style,
  onSelect,
  selectedValue: initialSelectedValue,
}: AccordionProps) => {
  const [cardLayoutHeight, setCardLayoutHeight] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    initialSelectedValue
  );

  const height = useSharedValue(INITIAL_CONTAINER_HEIGHT);

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;
    setCardLayoutHeight(onLayoutHeight + 16);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setTimeout(() => {
      setCollapsed(false);
    }, 200);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    height: height.value,
  }));

  useEffect(() => {
    if (collapsed) {
      height.value = withTiming(INITIAL_CONTAINER_HEIGHT + cardLayoutHeight, {
        duration: 300,
      });
    } else {
      height.value = withTiming(INITIAL_CONTAINER_HEIGHT, { duration: 300 });
    }
  }, [collapsed]);

  return (
    <AnimatedContainer style={[animatedStyles, style]}>
      <RowView style={{ justifyContent: 'center' }}>
        <InfoContainer>
          <FlexView style={{ height: INITIAL_CONTAINER_HEIGHT }}>
            {accordionTitle && (
              <AccordionTitle>{accordionTitle}</AccordionTitle>
            )}
          </FlexView>
          {collapsable && (
            <TouchableOpacity
              onPress={toggleCollapse}
              style={{ paddingRight: 16 }}
            >
              <Feather
                name={collapsed ? 'chevron-up' : 'chevron-down'}
                size={24}
              />
            </TouchableOpacity>
          )}
        </InfoContainer>
      </RowView>
      {collapsable && (
        <View onLayout={onLayout}>
          {data?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelect(item.value)}
            >
              <OptionContainer selected={item.value === selectedValue}>
                <Feather
                  name="clock"
                  size={20}
                  style={{ marginRight: 8 }}
                  color={
                    item.value === selectedValue
                      ? colors.secondary.backgroundColor
                      : colors.primary.textColor
                  }
                />
                <OptionText selected={item.value === selectedValue}>
                  {item.label}
                </OptionText>
                {item.value === selectedValue && (
                  <SelectedIcon>
                    <Feather name="check" size={20} color="#fff" />
                  </SelectedIcon>
                )}
              </OptionContainer>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </AnimatedContainer>
  );
};
