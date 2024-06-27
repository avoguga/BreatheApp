import { useAuth } from '@/contexts/auth-provider';
import { useState } from 'react';
import { Alert } from 'react-native';
import { PostsRepository } from '../repository/post-repository';

const useNewPost = (
  postsRepository: PostsRepository,
  loadPosts: () => Promise<void>,
  selectedAddress: string,
  setSelectedAddress: React.Dispatch<React.SetStateAction<string>>,
  userName?: string
) => {
  const { addPost } = postsRepository;
  const [newPost, setNewPost] = useState({
    title: '',
    text: '',
    mapUrl: '',
    address: '',
  });
  const { currentUser } = useAuth();
  const handleAddPost = async () => {
    if (!currentUser) {
      Alert.alert('Please log in to create posts');
      return;
    }

    if (!selectedAddress) {
      Alert.alert('Please select a location on the map.');
      return;
    }

    try {
      await addPost({
        ...newPost,
        username: userName || 'Anonymous',
        address: newPost.address,
        mapUrl: newPost.mapUrl,
      });
      resetForm();
      await loadPosts();
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  const resetForm = () => {
    setNewPost({ title: '', text: '', mapUrl: '', address: '' });
    setSelectedAddress('');
  };

  return {
    newPost,
    setNewPost,
    handleAddPost,
    resetForm,
  };
};

export default useNewPost;
