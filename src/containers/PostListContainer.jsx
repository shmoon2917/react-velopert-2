import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../modules/postsSaga';
import PostList from '../components/PostList';

const PostListContainer = () => {
  const { data: posts, loading, error } = useSelector(
    (state) => state.posts.posts
  );
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    console.log('useEffect');
    // if (posts) return;
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !posts) return <div>로딩중..</div>;
  if (error) return <div>에러 발생!</div>;
  if (!posts) return null;
  return <PostList posts={posts} />;
};

export default PostListContainer;
