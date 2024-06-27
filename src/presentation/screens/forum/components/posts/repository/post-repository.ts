import { Comment, Post } from '../types';

export interface PostsRepository {
  getPosts: () => Promise<Post[]>;
  addPost: (post: Omit<Post, 'id' | 'date' | 'comments'>) => Promise<void>;
  addComment: (postId: string, comment: Comment) => Promise<void>;
}
