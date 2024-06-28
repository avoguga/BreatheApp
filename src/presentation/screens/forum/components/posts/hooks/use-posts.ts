import { useAuth } from "@/contexts/auth-provider";
import { PostsRepository } from "../repository/post-repository";
import useComments from "./use-comments";
import useFilterPosts from "./use-filter-posts";
import useLoadPosts from "./use-load-posts";
import useLocationSelect from "./use-location-select";
import useNewPost from "./use-new-post";

const usePosts = (postsRepository: PostsRepository) => {
  const { currentUser, userName, loading: authLoading } = useAuth();
  const loadedPosts = useLoadPosts(postsRepository);
  const filteredPosts = useFilterPosts(loadedPosts.posts);
  const location = useLocationSelect();
  const newPost = useNewPost(
    postsRepository,
    loadedPosts.loadPosts,
    location.selectedAddress,
    location.selectedMapUrl,
    location.setSelectedAddress,
    userName!
  );
  const comments = useComments(
    postsRepository,
    loadedPosts.loadPosts,
    userName!
  );

  return {
    currentUser,
    authLoading,
    ...newPost,
    ...comments,
    ...loadedPosts,
    ...filteredPosts,
    ...location,
  };
};

export default usePosts;
