import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/postsWithSaga';

const PostListContainer = () => {
  const { data: posts, loading, error } = useSelector(
    (state) => state.posts.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // 포스트 목록 조회시 재로딩 이슈 해결법 1
    // if (posts) return;
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !posts) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!posts) return <div>포스트 없음</div>;

  return <PostList posts={posts} />;
};

export default PostListContainer;
