import { fonts } from '@/presentation/constants/fonts';
import { TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const SearchInput = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 5px;
  border-width: 0.2px;
  font-family: ${fonts.regular};
`;

export const PostFormContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PostForm = styled.View`
  padding: 16px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  elevation: 3;
`;

export const PostContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 15px 10px;
  border-radius: 10px;
  elevation: 3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PostHeader = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #1c2633;
  margin-bottom: 5px;
  font-family: ${fonts.bold};
`;

export const PostInfo = styled.Text`
  font-size: 14px;
  color: #7f8c8d;
  font-family: ${fonts.regular};
`;

export const TextContent = styled.Text`
  color: #555;
  font-size: 16px;
  font-family: ${fonts.regular};
  margin-bottom: 15px;
`;

export const AddressText = styled.Text`
  color: #555;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 15px;
  font-family: ${fonts.regular};
  font-style: italic;
`;

export const CommentContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const CommentUsername = styled.Text<{ color: string }>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ color }) => color};
  font-family: ${fonts.regular};
  margin-right: 5px;
`;

export const CommentText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: #555;
`;

export const CommentsContainer = styled.View`
  margin-top: 10px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #ddd;
`;

export const ToggleCommentsButton = styled.TouchableOpacity`
  padding: 5px;
  align-items: center;
`;

export const ToggleCommentsText = styled.Text`
  color: #007bff;
  font-size: 14px;
  font-family: ${fonts.bold};
`;

export const InputContainer = styled.View`
  margin-top: 10px;
`;

export const StyledTextInput = styled(TextInput)`
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: ${fonts.regular};
  margin-bottom: 10px;
`;

export const StyledTextArea = styled(TextInput).attrs({
  multiline: true,
})`
  padding: 0 10px;
  font-size: 16px;
  color: #333;
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-family: ${fonts.regular};
  min-height: 90px;
`;

export const StyledButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  background-color: #007bff;
  border-radius: 5px;
  align-items: center;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: ${fonts.bold};
`;

export const ResultLocation = styled.Text`
  color: #007bff;
  font-size: 16px;
  font-family: ${fonts.bold};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NoPostsText = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #7f8c8d;
  font-family: ${fonts.regular};
`;

export const OptionsContainer = styled.View`
  justify-content: space-around;
  flex-direction: row;
  margin-top: 64px;
`;
