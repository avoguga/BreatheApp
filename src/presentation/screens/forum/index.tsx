import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Posts from './components/posts';

export const ForumScreen = () => {
  const [showPostForm, setShowPostForm] = useState(false);

  return (
    <Container>
      <FloatingButtonContainer>
        <FloatingButton onPress={() => setShowPostForm(true)}>
          <Ionicons name="add" size={24} color="#fff" />
        </FloatingButton>
      </FloatingButtonContainer>
      <ScrollView>
        <Posts showPostForm={showPostForm} setShowPostForm={setShowPostForm} />
      </ScrollView>
    </Container>
  );
};

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f9f9f9;
`;

const FloatingButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  z-index: 1;
`;

const FloatingButton = styled(TouchableOpacity)`
  background-color: #e5be00;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;
