import { useState } from 'react';
import { Alert } from 'react-native';
import { PostsRepository } from '../repository/post-repository';
import { Comment } from '../types';
import { getRandomColor } from '../utils';

const useComments = (
  postsRepository: PostsRepository,
  loadPosts: () => Promise<void>,
  userName?: string
) => {
  const [commentText, setCommentText] = useState<string>('');
  const [expandedComments, setExpandedComments] = useState<
    Record<string, boolean>
  >({});

  const handleAddComment = async (postId: string, currentUser: any) => {
    if (!currentUser || !userName) {
      Alert.alert('Please log in and ensure your name is set to comment');
      return;
    }
    const newComment: Comment = {
      id: new Date().getTime().toString(),
      username: userName,
      text: commentText,
      color: getRandomColor(),
    };
    try {
      await postsRepository.addComment(postId, newComment);
      setCommentText('');
      await loadPosts();
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  const toggleComments = (postId: string) => {
    setExpandedComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return {
    commentText,
    setCommentText,
    expandedComments,
    toggleComments,
    handleAddComment,
  };
};

export default useComments;
