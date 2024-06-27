import firestore from '@react-native-firebase/firestore';
import { Comment, Post } from '../../types';
import { PostsRepository } from '../post-repository';

export const usePostsRepository = (): PostsRepository => {
  const getPosts = async (): Promise<Post[]> => {
    const querySnapshot = await firestore().collection('posts').get();
    return querySnapshot.docs.map((doc) => ({
      ...(doc.data() as Post),
      id: doc.id,
    }));
  };

  const addPost = async (
    post: Omit<Post, 'id' | 'date' | 'comments'>
  ): Promise<void> => {
    await firestore()
      .collection('posts')
      .add({
        ...post,
        date: new Date().toISOString(),
        comments: [],
      });
  };

  const addComment = async (
    postId: string,
    comment: Comment
  ): Promise<void> => {
    await firestore()
      .collection('posts')
      .doc(postId)
      .update({
        comments: firestore.FieldValue.arrayUnion(comment),
      });
  };

  return { getPosts, addPost, addComment };
};
