import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, goToHome } from '../modules/postsSaga';
import Post from '../components/Post';

const PostContainer = ({ postId }) => {
  const { data: post, loading, error } = useSelector(
    (state) => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) return;
    dispatch(getPost(postId));
  }, [dispatch, postId, post]);

  const onClick = () => dispatch(goToHome());

  if (loading && !post) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!post) return null;

  return (
    <>
      <button onClick={onClick}>홈으로 이동</button>
      <Post post={post} />
    </>
  );
};

export default PostContainer;
