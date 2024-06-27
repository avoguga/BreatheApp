import { MainButton } from '@/global/components/main-button';
import { colors } from '@/presentation/constants/colors';
import React, { FunctionComponent } from 'react';
import {
  KeyboardAvoidingView,
  Linking,
  Modal,
  Platform,
  ScrollView,
} from 'react-native';
import { Title } from 'react-native-paper';
import { Container } from '../..';
import { MapSelector } from '../maps';
import usePosts from './hooks/use-posts';
import { usePostsRepository } from './repository/implementations/use-post-repository';
import {
  AddressText,
  ButtonText,
  CommentContainer,
  CommentText,
  CommentUsername,
  CommentsContainer,
  Header,
  InputContainer,
  NoPostsText,
  OptionsContainer,
  PostContainer,
  PostForm,
  PostFormContainer,
  PostHeader,
  PostInfo,
  ResultLocation,
  SearchContainer,
  SearchInput,
  StyledButton,
  StyledTextArea,
  StyledTextInput,
  TextContent,
  ToggleCommentsButton,
  ToggleCommentsText,
} from './styles';

interface PostsProps {
  showPostForm: boolean;
  setShowPostForm: (show: boolean) => void;
}

const Posts: FunctionComponent<PostsProps> = ({
  showPostForm,
  setShowPostForm,
}) => {
  const postsRepository = usePostsRepository();
  const {
    currentUser,
    authLoading,
    loading,
    filteredPosts,
    searchText,
    setSearchText,
    newPost,
    setNewPost,
    selectedAddress,
    handleAddPost,
    commentText,
    setCommentText,
    expandedComments,
    toggleComments,
    handleAddComment,
    handleLocationSelect,
    isMapVisible,
    setIsMapVisible,
  } = usePosts(postsRepository);

  if (authLoading || loading) {
    return null;
  }

  return (
    <Container>
      <Header>
        <SearchContainer>
          <SearchInput
            placeholder="Search by title..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </SearchContainer>
      </Header>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostContainer key={post.id}>
              <PostHeader>
                <Title>{post.title}</Title>
                <PostInfo>
                  {post.username} • {new Date(post.date).toLocaleDateString()}
                </PostInfo>
              </PostHeader>
              <TextContent>{post.text}</TextContent>
              {post.address && <AddressText>{post.address}</AddressText>}
              {post.mapUrl && (
                <StyledButton onPress={() => Linking.openURL(post.mapUrl)}>
                  <ButtonText>View on Google Maps</ButtonText>
                </StyledButton>
              )}
              <CommentsContainer>
                {post.comments
                  .slice(0, expandedComments[post.id] ? undefined : 2)
                  .map((comment) => (
                    <CommentContainer key={comment.id}>
                      <CommentUsername color={comment.color ?? '#007bff'}>
                        {comment.username}:
                      </CommentUsername>
                      <CommentText>{comment.text}</CommentText>
                    </CommentContainer>
                  ))}
                {post.comments.length > 2 && (
                  <ToggleCommentsButton onPress={() => toggleComments(post.id)}>
                    <ToggleCommentsText>
                      {expandedComments[post.id]
                        ? 'Show less comments'
                        : 'Show more comments'}
                    </ToggleCommentsText>
                  </ToggleCommentsButton>
                )}
              </CommentsContainer>
              <InputContainer>
                <StyledTextInput
                  placeholder="Add a comment..."
                  value={commentText}
                  onChangeText={setCommentText}
                />
                <StyledButton
                  onPress={() => handleAddComment(post.id, currentUser?.uid)}
                >
                  <ButtonText>Comment</ButtonText>
                </StyledButton>
              </InputContainer>
            </PostContainer>
          ))
        ) : (
          <NoPostsText>No posts found</NoPostsText>
        )}
      </ScrollView>
      <Modal visible={showPostForm} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <PostFormContainer>
            <PostForm>
              <MainButton
                onPress={() => setShowPostForm(false)}
                style={{
                  backgroundColor: 'transparent',
                  alignSelf: 'flex-end',
                  marginBottom: 16,
                }}
              >
                <MainButton.Icon name="x" size={28} />
              </MainButton>
              <StyledTextInput
                placeholder="Title"
                value={newPost.title}
                onChangeText={(text) => setNewPost({ ...newPost, title: text })}
              />
              <StyledTextArea
                placeholder="Text"
                value={newPost.text}
                onChangeText={(text) => setNewPost({ ...newPost, text: text })}
                multiline
              />
              {selectedAddress && (
                <ResultLocation>
                  Selected Location: {selectedAddress}
                </ResultLocation>
              )}
              <OptionsContainer>
                <MainButton
                  onPress={() => setIsMapVisible(true)}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <MainButton.Icon name="map" size={24} />
                </MainButton>
                <MainButton
                  onPress={handleAddPost}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <MainButton.Icon
                    name="send"
                    size={24}
                    color={
                      !!selectedAddress ? colors.primary.textColor : 'gray'
                    }
                  />
                </MainButton>
              </OptionsContainer>
            </PostForm>
          </PostFormContainer>
        </KeyboardAvoidingView>
      </Modal>
      <MapSelector
        visible={isMapVisible}
        onClose={() => setIsMapVisible(false)}
        onLocationSelect={handleLocationSelect}
      />
    </Container>
  );
};

export default Posts;
