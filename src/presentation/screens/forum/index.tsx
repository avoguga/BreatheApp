import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Posts from "./components/posts";

export const ForumScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Posts />
      </ScrollView>
    </Container>
  );
};

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f9f9f9;
`;
