import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const SkeletonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin: 8px;
  background-color: #f0f0f0;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const SkeletonText = styled.View`
  width: 80%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const SkeletonButton = styled.View`
  width: 24px;
  height: 24px;
  background-color: #e0e0e0;
  border-radius: 12px;
`;

const SkeletonItem = () => {
  return (
    <SkeletonContainer>
      <View style={{ flex: 1 }}>
        <SkeletonText />
        <SkeletonText style={{ width: "60%" }} />
      </View>
      <SkeletonButton />
    </SkeletonContainer>
  );
};

export default SkeletonItem;
