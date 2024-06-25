import { useAuth } from "@/contexts/auth-provider";
import firestore from "@react-native-firebase/firestore";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

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
  subject: string;
  text: string;
  comments: Comment[];
}

const Posts: FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [commentText, setCommentText] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", subject: "", text: "" });
  const { currentUser, userName, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      loadPosts();
    }
  }, [loading]);

  const loadPosts = async () => {
    try {
      const querySnapshot = await firestore().collection("posts").get();
      const loadedPosts = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Post),
        id: doc.id,
      }));
      setPosts(loadedPosts);
    } catch (error) {
      console.error("Error loading posts: ", error);
    }
  };

  const handleAddPost = async () => {
    if (!currentUser) {
      Alert.alert("Please log in to create posts");
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
        });
      setNewPost({ title: "", subject: "", text: "" });
      setShowPostForm(false);
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

  if (loading) {
    return null;
  }

  return (
    <ScrollView>
      <AddPostButton onPress={() => setShowPostForm(!showPostForm)}>
        <ButtonText>{showPostForm ? "Close" : "Create New Post"}</ButtonText>
      </AddPostButton>
      {showPostForm && (
        <PostForm>
          <StyledTextInput
            placeholder="Title"
            value={newPost.title}
            onChangeText={(text) => setNewPost({ ...newPost, title: text })}
          />
          <StyledTextInput
            placeholder="Subject"
            value={newPost.subject}
            onChangeText={(text) => setNewPost({ ...newPost, subject: text })}
          />
          <StyledTextInput
            placeholder="Text"
            value={newPost.text}
            onChangeText={(text) => setNewPost({ ...newPost, text: text })}
            multiline
          />
          <StyledButton onPress={handleAddPost}>
            <ButtonText>Submit Post</ButtonText>
          </StyledButton>
        </PostForm>
      )}
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <PostContainer key={post.id}>
            <Title>
              {post.title} - {post.username} (
              {new Date(post.date).toLocaleDateString()})
            </Title>
            <Subtitle>{post.subject}</Subtitle>
            <TextContent>{post.text}</TextContent>
            <CommentsContainer>
              {post.comments.map((comment) => (
                <CommentText key={comment.id}>
                  {comment.username}: {comment.text}
                </CommentText>
              ))}
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
        ))}
    </ScrollView>
  );
};

const PostForm = styled.View`
  padding: 20px;
  margin: 10px 5px;
  background-color: #f8f9fa;
`;

const AddPostButton = styled(TouchableOpacity)`
  margin: 10px 20px;
  padding: 10px;
  background-color: #3498db;
  border-radius: 5px;
`;

const PostContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  margin: 10px 5px;
  border-radius: 10px;
  elevation: 3;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
`;

const Subtitle = styled.Text`
  color: #7f8c8d;
  font-size: 16px;
  margin-bottom: 10px;
`;

const TextContent = styled.Text`
  color: #34495e;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 15px;
`;

const CommentText = styled.Text`
  font-size: 14px;
  color: #95a5a6;
  padding-left: 10px;
  border-left-width: 4px;
  border-left-color: #ecf0f1;
  margin-bottom: 5px;
`;

const CommentsContainer = styled.View`
  margin-top: 10px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #bdc3c7;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  color: #34495e;
  background-color: #ecf0f1;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #cccccc;
`;

const StyledButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #3498db;
  border-radius: 5px;
  elevation: 3;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export default Posts;
