import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost, goToHome } from '../modules/postsWithSaga';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';

const PostContainer = ({ postId }) => {
  const { data: post, loading, error } =
    useSelector((state) => state.posts.post[postId]) || reducerUtils.initial();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) return;
    dispatch(getPost(postId));

    // 포스트 조회시 재로딩 이슈 해결법 1
    // return () => {
    //   dispatch(clearPost());
    // };
  }, [dispatch, postId, post]);

  const onClick = () => dispatch(goToHome());

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!post) return null;

  return (
    <>
      <button onClick={onClick}>홈으로 가기</button>
      <Post post={post} />
    </>
  );
};

export default PostContainer;
