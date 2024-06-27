import { useEffect, useState } from 'react';
import { PostsRepository } from '../repository/post-repository';
import { Post } from '../types';

const useLoadPosts = (postsRepository: PostsRepository) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadPosts = async () => {
    try {
      const loadedPosts = await postsRepository.getPosts();
      setPosts(loadedPosts);
    } catch (error) {
      console.error('Error loading posts: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return { posts, loadPosts, loading };
};

export default useLoadPosts;
