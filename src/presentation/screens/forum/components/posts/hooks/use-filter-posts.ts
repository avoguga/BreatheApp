import { useEffect, useState } from 'react';
import { Post } from '../types';

const useFilterPosts = (posts: Post[]) => {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchText, posts]);

  return { searchText, setSearchText, filteredPosts };
};

export default useFilterPosts;
