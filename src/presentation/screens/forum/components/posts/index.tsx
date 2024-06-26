import { useAuth } from "@/contexts/auth-provider";
import firestore from "@react-native-firebase/firestore";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Linking,
  Modal,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Address } from "../../utils";
import { MapSelector } from "../maps";

interface Comment {
  id: string;
  username: string;
  text: string;
}

interface Post {
  id: string;
  username: string;
  date: string;
  title: string;
  text: string;
  comments: Comment[];
  mapUrl: string;
  address: string;
}

interface PostsProps {
  showPostForm: boolean;
  setShowPostForm: (show: boolean) => void;
}

const Posts: FunctionComponent<PostsProps> = ({
  showPostForm,
  setShowPostForm,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [commentText, setCommentText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [newPost, setNewPost] = useState({
    title: "",
    text: "",
    mapUrl: "",
    address: "",
  });
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [expandedComments, setExpandedComments] = useState<
    Record<string, boolean>
  >({});

  const { currentUser, userName, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      loadPosts();
    }
  }, [loading]);

  useEffect(() => {
    filterPosts(searchText);
  }, [searchText, posts]);

  const loadPosts = async () => {
    try {
      const querySnapshot = await firestore().collection("posts").get();
      const loadedPosts = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Post),
        id: doc.id,
      }));
      setPosts(loadedPosts);
      setFilteredPosts(loadedPosts);
    } catch (error) {
      console.error("Error loading posts: ", error);
    }
  };

  const filterPosts = (text: string) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleLocationSelect = (addressInfo: Address) => {
    setNewPost({
      ...newPost,
      mapUrl: addressInfo.googleMapsUrl,
      address: addressInfo.address,
    });
    setSelectedAddress(addressInfo.address);
    setIsMapVisible(false);
  };

  const handleAddPost = async () => {
    if (!currentUser) {
      Alert.alert("Please log in to create posts");
      return;
    }

    if (!selectedAddress) {
      Alert.alert("Please select a location on the map.");
      return;
    }

    try {
      await firestore()
        .collection("posts")
        .add({
          ...newPost,
          username: userName || "Anonymous",
          date: new Date().toISOString(),
          comments: [],
          mapUrl: newPost.mapUrl,
          address: newPost.address,
        });
      resetForm();
      loadPosts();
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  const handleAddComment = async (postId: string) => {
    if (!currentUser || !userName) {
      Alert.alert("Please log in and ensure your name is set to comment");
      return;
    }
    const newComment: Comment = {
      id: new Date().getTime().toString(),
      username: userName,
      text: commentText,
    };
    try {
      await firestore()
        .collection("posts")
        .doc(postId)
        .update({
          comments: firestore.FieldValue.arrayUnion(newComment),
        });
      setCommentText("");
      loadPosts();
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  const toggleComments = (postId: string) => {
    setExpandedComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const resetForm = () => {
    setNewPost({ title: "", text: "", mapUrl: "", address: "" });
    setSelectedAddress("");
    setShowPostForm(false);
    setIsMapVisible(false);
  };

  if (loading) {
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
                      <CommentUsername
                        isCurrentUser={comment.username === userName}
                      >
                        {comment.username}:
                      </CommentUsername>
                      <CommentText
                        isCurrentUser={comment.username === userName}
                      >
                        {comment.text}
                      </CommentText>
                    </CommentContainer>
                  ))}
                {post.comments.length > 2 && (
                  <ToggleCommentsButton onPress={() => toggleComments(post.id)}>
                    <ToggleCommentsText>
                      {expandedComments[post.id]
                        ? "Show less comments"
                        : "Show more comments"}
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
                <StyledButton onPress={() => handleAddComment(post.id)}>
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
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <PostFormContainer>
            <PostForm>
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
              <StyledButton onPress={() => setIsMapVisible(true)}>
                <ButtonText>Select Location on Map</ButtonText>
              </StyledButton>
              {selectedAddress && (
                <ResultLocation>
                  Selected Location: {selectedAddress}
                </ResultLocation>
              )}
              <StyledButton onPress={handleAddPost}>
                <ButtonText>Submit Post</ButtonText>
              </StyledButton>
              <StyledButton onPress={() => setShowPostForm(false)}>
                <ButtonText>Cancel</ButtonText>
              </StyledButton>
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

const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.View`
  flex: 1;
  margin-right: 10px;
`;

const SearchInput = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 5px;
`;

const PostFormContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PostForm = styled.View`
  padding: 20px;
  background-color: #f5cf2f;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  elevation: 3;
`;

const PostContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 15px 10px;
  border-radius: 10px;
  elevation: 3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostHeader = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #1c2633;
  margin-bottom: 5px;
`;

const PostInfo = styled.Text`
  font-size: 14px;
  color: #7f8c8d;
`;

const TextContent = styled.Text`
  color: #555;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
`;

const AddressText = styled.Text`
  color: #555;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 15px;
  font-style: italic;
`;

const CommentContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const CommentUsername = styled.Text<{ isCurrentUser: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ isCurrentUser }) => (isCurrentUser ? "#007bff" : "#333")};
  margin-right: 5px;
`;

const CommentText = styled.Text<{ isCurrentUser: boolean }>`
  font-size: 14px;
  color: ${({ isCurrentUser }) => (isCurrentUser ? "#007bff" : "#555")};
`;

const CommentsContainer = styled.View`
  margin-top: 10px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #ddd;
`;

const ToggleCommentsButton = styled.TouchableOpacity`
  padding: 5px;
  align-items: center;
`;

const ToggleCommentsText = styled.Text`
  color: #007bff;
  font-size: 14px;
`;

const InputContainer = styled.View`
  margin-top: 10px;
`;

const StyledTextInput = styled(TextInput)`
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px;
`;

const StyledTextArea = styled(TextInput)`
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px;
  height: 150px;
`;

const StyledButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  background-color: #007bff;
  border-radius: 5px;
  align-items: center;
  margin: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const ResultLocation = styled.Text`
  color: #007bff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NoPostsText = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #7f8c8d;
`;

export default Posts;
