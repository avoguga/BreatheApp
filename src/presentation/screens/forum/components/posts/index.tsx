import { useAuth } from "@/contexts/auth-provider";
import firestore from "@react-native-firebase/firestore";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Alert, Linking, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Address, getCurrentLocation, getLocationUrl } from "../../utils";
import { MapSelector } from "../maps";

export const GOOGLE_PLACES_API_KEY = "AIzaSyBTGOdz5HRvO6FpqzsUwXzwqWBXzuIGT-M";

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
  mapUrl: any;
  address: string;
}

const Posts: FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [commentText, setCommentText] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    text: "",
    mapUrl: "",
    address: "",
  });
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

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

    const coords = await getCurrentLocation();
    if (!coords) {
      Alert.alert("Failed to get location");
      return;
    }

    const mapUrl = await getLocationUrl(coords.latitude, coords.longitude);

    try {
      await firestore()
        .collection("posts")
        .add({
          ...newPost,
          username: userName || "Anonymous",
          date: new Date().toISOString(),
          comments: [],
          mapUrl: mapUrl.googleMapsUrl,
          address: mapUrl.address,
        });
      setNewPost({ title: "", text: "", mapUrl: "", address: "" });
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
        </PostForm>
      )}
      <MapSelector
        visible={isMapVisible}
        onClose={() => setIsMapVisible(false)}
        onLocationSelect={handleLocationSelect}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <Title>
            {post.title} - {post.username} (
            {new Date(post.date).toLocaleDateString()})
          </Title>
          <TextContent>{post.text}</TextContent>
          {post.address && <AddressText>{post.address}</AddressText>}
          {post.mapUrl && (
            <StyledButton onPress={() => Linking.openURL(post.mapUrl)}>
              <ButtonText>View on Google Maps</ButtonText>
            </StyledButton>
          )}
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
  margin: 15px 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
  elevation: 3;
`;

const AddPostButton = styled(TouchableOpacity)`
  margin: 20px 30px;
  padding: 15px;
  background-color: #5cb85c;
  border-radius: 10px;
  align-items: center;
`;

const PostContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  margin: 10px 5px;
  border-radius: 10px;
  elevation: 3;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
`;
const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
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

const CommentText = styled.Text`
  font-size: 14px;
  color: #777;
  padding-left: 10px;
  border-left-width: 4px;
  border-left-color: #ddd;
  margin-bottom: 5px;
`;

const CommentsContainer = styled.View`
  margin-top: 10px;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: #ddd;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  color: #333;
  background-color: #f8f8f8;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #ddd;
  margin: 10px;
`;

const StyledButton = styled(TouchableOpacity)`
  padding: 10px 20px;
  background-color: #007bff;
  margin: 10px;
  border-radius: 5px;
  align-items: center;
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

export default Posts;
